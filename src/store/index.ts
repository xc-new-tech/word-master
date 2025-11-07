import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Word, LearningRecord, UserProfile, Statistics } from '@/types';

interface AppState {
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

  // 当前学习会话
  currentWords: Word[];
  setCurrentWords: (words: Word[]) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;

  // 统计数据
  statistics: Statistics;
  updateStatistics: (stats: Partial<Statistics>) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
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

      // 当前学习会话
      currentWords: [],
      setCurrentWords: (words) => set({ currentWords: words }),
      currentIndex: 0,
      setCurrentIndex: (index) => set({ currentIndex: index }),

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
      name: 'word-master-storage',
    }
  )
);
