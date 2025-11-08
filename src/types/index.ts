// 单词数据结构
export interface Word {
  id: string;
  word: string;
  level: '初一' | '初二' | '初三';
  unit: string;
  frequency: '高频' | '中频' | '低频';
  data: WordData;
}

export interface WordData {
  phonetic_uk: string;
  phonetic_us: string;
  meanings: string[];
  word_forms: {
    noun?: string;
    verb?: string;
    adjective?: string;
    adverb?: string;
    person?: string;
  };
  collocations: string[];
  exam_frequency: number;
  etymology?: Etymology;
  gameDescription?: string; // 语言游戏描述
  academicContext?: string; // 学术场景
  dailyContext?: string; // 生活场景
  memoryStory?: string; // 记忆故事
  confusableWords?: string[]; // 易混淆词
}

export interface Etymology {
  prefix?: string;
  root: string;
  suffix?: string;
  meaning: string;
}

// 用户学习记录
export interface LearningRecord {
  wordId: string;
  firstSeen: Date;
  lastReview: Date;
  reviews: ReviewRecord[];
  mastery: number; // 0-100
  status: 'new' | 'learning' | 'mastered' | 'forgotten';
}

export interface ReviewRecord {
  date: Date;
  correct: boolean;
  mode: 'learn' | 'review' | 'dictation-en-cn' | 'dictation-cn-en';
  timeSpent: number; // 秒
}

// 学习模式
export type LearningMode = 'sequential' | 'random' | 'smart' | 'exam-sprint';

// 听写模式
export type DictationMode = 'en-to-cn' | 'cn-to-en';

// 用户配置
export interface UserProfile {
  grade: '初一' | '初二' | '初三';
  dailyGoal: number;
  preferredMode: LearningMode;
  settings: UserSettings;
}

export interface UserSettings {
  pronunciation: 'uk' | 'us';
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  theme: 'light' | 'dark' | 'auto';
  soundEnabled: boolean;
}

// 统计数据
export interface Statistics {
  totalWords: number;
  masteredWords: number;
  todayNewWords: number;
  todayReviews: number;
  streak: number;
  accuracy: number;
}

// 用户账号
export interface UserAccount {
  username: string;
  displayName: string;
  createdAt: Date;
  lastLoginAt: Date;
}
