import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';
import { Word, LearningRecord, UserProfile, Statistics, UserAccount } from '@/types';

// 账号管理辅助函数
const CURRENT_USER_KEY = 'word-master-current-user';
const ACCOUNTS_KEY = 'word-master-accounts';

function getCurrentUser(): string | null {
  return localStorage.getItem(CURRENT_USER_KEY);
}

function setCurrentUser(username: string | null) {
  if (username) {
    localStorage.setItem(CURRENT_USER_KEY, username);
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

function getStorageKey(username: string): string {
  return `word-master-storage-${username}`;
}

function getAllAccounts(): UserAccount[] {
  const accountsJson = localStorage.getItem(ACCOUNTS_KEY);
  if (!accountsJson) return [];
  try {
    return JSON.parse(accountsJson);
  } catch {
    return [];
  }
}

function saveAccount(username: string) {
  const accounts = getAllAccounts();
  const existingAccount = accounts.find(acc => acc.username === username);

  if (existingAccount) {
    existingAccount.lastLoginAt = new Date();
  } else {
    accounts.push({
      username,
      displayName: username,
      createdAt: new Date(),
      lastLoginAt: new Date(),
    });
  }

  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

interface AppState {
  // 当前登录用户
  currentUser: string | null;
  login: (username: string) => void;
  logout: () => void;

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
}

// 自定义 storage，支持动态切换用户的 storage key
const customStorage: PersistStorage<AppState> = {
  getItem: (_name: string) => {
    const user = getCurrentUser();
    const actualKey = user ? getStorageKey(user) : 'word-master-storage-guest';
    const value = localStorage.getItem(actualKey);
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  },
  setItem: (_name: string, value) => {
    const user = getCurrentUser();
    const actualKey = user ? getStorageKey(user) : 'word-master-storage-guest';
    localStorage.setItem(actualKey, JSON.stringify(value));
  },
  removeItem: (_name: string) => {
    const user = getCurrentUser();
    const actualKey = user ? getStorageKey(user) : 'word-master-storage-guest';
    localStorage.removeItem(actualKey);
  },
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // 当前登录用户
      currentUser: getCurrentUser(),
      login: (username: string) => {
        if (!username || username.trim() === '') return;
        const trimmedUsername = username.trim();
        saveAccount(trimmedUsername);
        setCurrentUser(trimmedUsername);
        set({ currentUser: trimmedUsername });
        // 切换用户后重新加载页面以加载该用户的数据
        window.location.reload();
      },
      logout: () => {
        setCurrentUser(null);
        set({ currentUser: null });
        // 退出登录后重新加载页面
        window.location.reload();
      },

      // 默认用户配置
      userProfile: {
        grade: '初三',
        dailyGoal: 20,
        preferredMode: 'smart',
        settings: {
          pronunciation: 'uk',
          fontSize: 'medium',
          theme: 'auto',
          soundEnabled: true,
        },
      },
      setUserProfile: (profile) =>
        set((state) => ({
          userProfile: { ...state.userProfile, ...profile },
        })),

      // 主题
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      // 学习记录
      learningRecords: {},
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

      // 顺序学习进度（记录已学习到第几个单词）
      sequentialProgress: 0,
      setSequentialProgress: (progress) => set({ sequentialProgress: progress }),
      resetSequentialProgress: () => set({ sequentialProgress: 0 }),

      // 当前学习会话
      currentWords: [],
      setCurrentWords: (words) => set({ currentWords: words }),
      currentIndex: 0,
      setCurrentIndex: (index) => set({ currentIndex: index }),
      currentMode: null,
      setCurrentMode: (mode) => set({ currentMode: mode }),

      // 统计数据
      statistics: {
        totalWords: 0,
        masteredWords: 0,
        todayNewWords: 0,
        todayReviews: 0,
        streak: 0,
        accuracy: 0,
      },
      updateStatistics: (stats) =>
        set((state) => ({
          statistics: { ...state.statistics, ...stats },
        })),
    }),
    {
      name: 'word-master-storage', // 这个 name 只是占位符，实际的 key 由 customStorage 动态决定
      storage: customStorage,
    }
  )
);

// 导出账号管理函数供组件使用
export { getAllAccounts };
