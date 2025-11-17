import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';
import { Word, LearningRecord, UserProfile, Statistics } from '@/types';
import { authService, dataService } from '@/services/supabase';

// 当前用户ID的localStorage key
const CURRENT_USER_KEY = 'word-master-current-user-id';

function getCurrentUserId(): string | null {
  return localStorage.getItem(CURRENT_USER_KEY);
}

function setCurrentUserId(userId: string | null) {
  if (userId) {
    localStorage.setItem(CURRENT_USER_KEY, userId);
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

function getStorageKey(userId: string): string {
  return `word-master-storage-${userId}`;
}

// 同步状态
export type SyncStatus = 'idle' | 'syncing' | 'success' | 'error';

// 持久化的状态（不包含同步状态等临时数据）
interface PersistedState {
  userProfile: UserProfile;
  theme: 'light' | 'dark';
  learningRecords: Record<string, LearningRecord>;
  sequentialProgress: number;
  currentWords: Word[];
  currentIndex: number;
  currentMode: 'sequential' | 'random' | 'smart' | 'sprint' | null;
  statistics: Statistics;
}

interface AppState {
  // 当前登录用户（Supabase User ID）
  currentUser: string | null;
  setCurrentUser: (userId: string | null) => void;
  logout: () => void;

  // 同步状态
  syncStatus: SyncStatus;
  lastSyncTime: Date | null;
  syncError: string | null;
  setSyncStatus: (status: SyncStatus, error?: string) => void;
  setLastSyncTime: (time: Date) => void;

  // 数据同步方法
  syncToCloud: () => Promise<void>;
  syncFromCloud: () => Promise<void>;

  // 用户配置
  userProfile: UserProfile;
  setUserProfile: (profile: Partial<UserProfile>) => void;

  // 当前主题
  theme: 'light' | 'dark';
  toggleTheme: () => void;

  // 学习记录
  learningRecords: Record<string, LearningRecord>;
  addLearningRecord: (record: LearningRecord) => void;
  updateLearningRecord: (wordId: string, updates: Partial<LearningRecord>) => void;

  // 顺序学习进度
  sequentialProgress: number;
  setSequentialProgress: (progress: number) => void;
  resetSequentialProgress: () => void;

  // 当前学习会话
  currentWords: Word[];
  setCurrentWords: (words: Word[]) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  currentMode: 'sequential' | 'random' | 'smart' | 'sprint' | null;
  setCurrentMode: (mode: 'sequential' | 'random' | 'smart' | 'sprint' | null) => void;

  // 统计数据
  statistics: Statistics;
  updateStatistics: (stats: Partial<Statistics>) => void;

  // 重置所有数据（用于登出）
  resetData: () => void;
}

// Date反序列化辅助函数
function reviveDates(obj: any): any {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(obj)) {
    const date = new Date(obj);
    if (!isNaN(date.getTime())) {
      return date;
    }
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => reviveDates(item));
  }

  if (typeof obj === 'object') {
    const result: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = reviveDates(obj[key]);
      }
    }
    return result;
  }

  return obj;
}

// 自定义 storage，支持按用户ID存储
const customStorage: PersistStorage<PersistedState> = {
  getItem: (_name: string) => {
    const userId = getCurrentUserId();
    if (!userId) return null;

    const actualKey = getStorageKey(userId);
    const value = localStorage.getItem(actualKey);
    if (!value) return null;

    try {
      const parsed = JSON.parse(value);
      return reviveDates(parsed);
    } catch {
      return null;
    }
  },
  setItem: (_name: string, value) => {
    const userId = getCurrentUserId();
    if (!userId) return;

    const actualKey = getStorageKey(userId);
    localStorage.setItem(actualKey, JSON.stringify(value));
  },
  removeItem: (_name: string) => {
    const userId = getCurrentUserId();
    if (!userId) return;

    const actualKey = getStorageKey(userId);
    localStorage.removeItem(actualKey);
  },
};

// 默认状态
const defaultState = {
  userProfile: {
    grade: '初三' as const,
    dailyGoal: 20,
    preferredMode: 'smart' as const,
    settings: {
      pronunciation: 'uk' as const,
      fontSize: 'medium' as const,
      theme: 'auto' as const,
      soundEnabled: true,
    },
  },
  theme: 'light' as const,
  learningRecords: {},
  sequentialProgress: 0,
  currentWords: [],
  currentIndex: 0,
  currentMode: null,
  statistics: {
    totalWords: 0,
    masteredWords: 0,
    todayNewWords: 0,
    todayReviews: 0,
    streak: 0,
    accuracy: 0,
  },
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // 当前登录用户
      currentUser: getCurrentUserId(),
      setCurrentUser: (userId: string | null) => {
        setCurrentUserId(userId);
        set({ currentUser: userId });
      },

      logout: async () => {
        try {
          await authService.signOut();
        } catch (error) {
          console.error('退出登录失败:', error);
        } finally {
          setCurrentUserId(null);
          set({
            currentUser: null,
            syncStatus: 'idle',
            lastSyncTime: null,
            syncError: null,
          });
          window.location.reload();
        }
      },

      // 同步状态
      syncStatus: 'idle',
      lastSyncTime: null,
      syncError: null,
      setSyncStatus: (status: SyncStatus, error?: string) => {
        set({ syncStatus: status, syncError: error || null });
      },
      setLastSyncTime: (time: Date) => {
        set({ lastSyncTime: time });
      },

      // 同步到云端
      syncToCloud: async () => {
        const state = get();
        const { currentUser, userProfile, learningRecords, statistics, sequentialProgress } = state;

        if (!currentUser) {
          console.warn('未登录，无法同步到云端');
          return;
        }

        try {
          set({ syncStatus: 'syncing' });

          await dataService.uploadUserData(
            currentUser,
            userProfile,
            learningRecords,
            statistics,
            sequentialProgress
          );

          set({
            syncStatus: 'success',
            lastSyncTime: new Date(),
            syncError: null,
          });

          console.log('数据同步到云端成功');
        } catch (error: any) {
          console.error('同步到云端失败:', error);
          set({
            syncStatus: 'error',
            syncError: error.message || '同步失败',
          });
        }
      },

      // 从云端同步
      syncFromCloud: async () => {
        const { currentUser } = get();

        if (!currentUser) {
          console.warn('未登录，无法从云端同步');
          return;
        }

        try {
          set({ syncStatus: 'syncing' });

          const cloudData = await dataService.downloadUserData(currentUser);

          if (cloudData) {
            // 合并云端数据到本地
            set({
              userProfile: cloudData.user_profile,
              learningRecords: cloudData.learning_records,
              statistics: cloudData.statistics,
              sequentialProgress: cloudData.sequential_progress,
              syncStatus: 'success',
              lastSyncTime: new Date(cloudData.last_synced_at),
              syncError: null,
            });

            console.log('从云端同步数据成功');
          } else {
            // 云端没有数据，上传本地数据
            console.log('云端无数据，上传本地数据');
            await get().syncToCloud();
          }
        } catch (error: any) {
          console.error('从云端同步失败:', error);
          set({
            syncStatus: 'error',
            syncError: error.message || '同步失败',
          });
        }
      },

      // 用户配置
      ...defaultState,

      setUserProfile: (profile) =>
        set((state) => ({
          userProfile: { ...state.userProfile, ...profile },
        })),

      // 主题
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      // 学习记录
      addLearningRecord: (record) =>
        set((state) => ({
          learningRecords: {
            ...state.learningRecords,
            [record.wordId]: record,
          },
        })),
      updateLearningRecord: (wordId, updates) =>
        set((state) => ({
          learningRecords: {
            ...state.learningRecords,
            [wordId]: {
              ...state.learningRecords[wordId],
              ...updates,
            },
          },
        })),

      // 顺序学习进度
      setSequentialProgress: (progress) => set({ sequentialProgress: progress }),
      resetSequentialProgress: () => set({ sequentialProgress: 0 }),

      // 当前学习会话
      setCurrentWords: (words) => set({ currentWords: words }),
      setCurrentIndex: (index) => set({ currentIndex: index }),
      setCurrentMode: (mode) => set({ currentMode: mode }),

      // 统计数据
      updateStatistics: (stats) =>
        set((state) => ({
          statistics: { ...state.statistics, ...stats },
        })),

      // 重置数据
      resetData: () => set(defaultState),
    }),
    {
      name: 'word-master-storage',
      storage: customStorage,
      // 只持久化必要的数据，同步状态不持久化
      partialize: (state) => ({
        userProfile: state.userProfile,
        theme: state.theme,
        learningRecords: state.learningRecords,
        sequentialProgress: state.sequentialProgress,
        currentWords: state.currentWords,
        currentIndex: state.currentIndex,
        currentMode: state.currentMode,
        statistics: state.statistics,
      }),
    }
  )
);
