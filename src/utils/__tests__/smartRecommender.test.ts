import { describe, it, expect } from 'vitest';
import { calculatePriority, recommendWords, filterByMode } from '../smartRecommender';
import { Word, LearningRecord } from '@/types';

describe('smartRecommender', () => {
  const createMockWord = (id: string, frequency: Word['frequency'], level: Word['level']): Word => ({
    id,
    word: `test-${id}`,
    level,
    unit: 'Unit 1',
    frequency,
    data: {
      phonetic_uk: '/test/',
      phonetic_us: '/test/',
      meanings: ['测试'],
      collocations: [],
      word_forms: {},
      exam_frequency: 0,
    },
  });

  const createMockRecord = (mastery: number, daysAgo: number = 0): LearningRecord => {
    const lastReview = new Date();
    lastReview.setDate(lastReview.getDate() - daysAgo);

    return {
      wordId: 'test',
      firstSeen: new Date(),
      lastReview,
      reviews: [],
      mastery,
      status: mastery >= 80 ? 'mastered' : 'learning',
    };
  };

  describe('calculatePriority', () => {
    it('高频词应该获得更高分数', () => {
      const highFreqWord = createMockWord('1', '高频', '初一');
      const midFreqWord = createMockWord('2', '中频', '初一');
      const lowFreqWord = createMockWord('3', '低频', '初一');

      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const score1 = calculatePriority(highFreqWord, context);
      const score2 = calculatePriority(midFreqWord, context);
      const score3 = calculatePriority(lowFreqWord, context);

      expect(score1).toBeGreaterThan(score2);
      expect(score2).toBeGreaterThan(score3);
    });

    it('年级匹配的单词应该获得更高分数', () => {
      const word = createMockWord('1', '中频', '初二');

      const context1 = {
        userLevel: '初二' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const context2 = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const score1 = calculatePriority(word, context1);
      const score2 = calculatePriority(word, context2);

      expect(score1).toBeGreaterThan(score2);
    });

    it('掌握度低的单词应该获得更高分数', () => {
      const word = createMockWord('1', '中频', '初一');

      const lowMasteryRecord = createMockRecord(20, 1);
      const highMasteryRecord = createMockRecord(90, 1);

      const context1 = {
        userLevel: '初一' as const,
        learningRecords: new Map([[word.id, lowMasteryRecord]]),
        currentDate: new Date(),
      };

      const context2 = {
        userLevel: '初一' as const,
        learningRecords: new Map([[word.id, highMasteryRecord]]),
        currentDate: new Date(),
      };

      const score1 = calculatePriority(word, context1);
      const score2 = calculatePriority(word, context2);

      expect(score1).toBeGreaterThan(score2);
    });

    it('新词应该根据频率获得分数', () => {
      const highFreqWord = createMockWord('1', '高频', '初一');
      const lowFreqWord = createMockWord('2', '低频', '初一');

      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const score1 = calculatePriority(highFreqWord, context);
      const score2 = calculatePriority(lowFreqWord, context);

      expect(score1).toBeGreaterThan(score2);
    });
  });

  describe('recommendWords', () => {
    it('应该返回指定数量的单词', () => {
      const words = Array.from({ length: 50 }, (_, i) =>
        createMockWord(`${i}`, '中频', '初一')
      );

      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const result = recommendWords(words, context, 20);

      expect(result).toHaveLength(20);
    });

    it('应该优先推荐高分单词', () => {
      const words = [
        createMockWord('1', '低频', '初三'), // 低分
        createMockWord('2', '高频', '初一'), // 高分
        createMockWord('3', '中频', '初二'), // 中分
      ];

      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const result = recommendWords(words, context, 3);

      // 高频初一的单词应该排在前面
      expect(result[0].id).toBe('2');
    });

    it('请求数量超过总数时返回所有单词', () => {
      const words = Array.from({ length: 10 }, (_, i) =>
        createMockWord(`${i}`, '中频', '初一')
      );

      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const result = recommendWords(words, context, 50);

      expect(result).toHaveLength(10);
    });
  });

  describe('filterByMode', () => {
    const words = [
      { ...createMockWord('1', '高频', '初一'), unit: 'Unit 3' },
      { ...createMockWord('2', '中频', '初一'), unit: 'Unit 1' },
      { ...createMockWord('3', '低频', '初一'), unit: 'Unit 2' },
    ];

    it('sequential模式应该按单元顺序返回', () => {
      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
        sequentialProgress: 0,
      };

      const result = filterByMode(words, 'sequential', context);

      expect(result[0].unit).toBe('Unit 1');
      expect(result[1].unit).toBe('Unit 2');
      expect(result[2].unit).toBe('Unit 3');
    });

    it('random模式应该打乱顺序', () => {
      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const result = filterByMode(words, 'random', context);

      expect(result).toHaveLength(words.length);
      // 注意：随机性测试不可靠，只验证长度
    });

    it('smart模式应该使用智能推荐', () => {
      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const result = filterByMode(words, 'smart', context);

      expect(result.length).toBeGreaterThan(0);
    });

    it('sprint模式应该优先返回高频词', () => {
      const context = {
        userLevel: '初一' as const,
        learningRecords: new Map(),
        currentDate: new Date(),
      };

      const result = filterByMode(words, 'sprint', context);

      // 第一个应该是高频词
      expect(result[0].frequency).toBe('高频');
    });
  });
});
