import { describe, it, expect } from 'vitest';
import {
  calculateNextReviewDate,
  needsReview,
  calculateUrgency,
  getWordsNeedingReview,
  getTodayReviewStats,
  getWeeklyReviewPlan,
} from '../reviewQueue';
import { LearningRecord, Word } from '@/types';

describe('reviewQueue', () => {
  // 辅助函数：创建测试用的学习记录
  const createMockRecord = (
    reviewCount: number,
    mastery: number,
    lastReviewDaysAgo: number = 0
  ): LearningRecord => {
    const now = new Date();
    const lastReview = new Date(now);
    lastReview.setDate(lastReview.getDate() - lastReviewDaysAgo);

    return {
      wordId: 'test-word-1',
      firstSeen: new Date('2025-01-01'),
      lastReview,
      reviews: Array(reviewCount).fill({
        date: lastReview,
        correct: true,
        mode: 'learn' as const,
        timeSpent: 30,
      }),
      mastery,
      status: mastery >= 80 ? 'mastered' : mastery >= 40 ? 'learning' : 'new',
    };
  };

  const createMockWord = (id: string = 'test-word-1'): Word => ({
    id,
    word: 'test',
    level: '初一' as const,
    unit: 'Unit 1',
    frequency: '高频' as const,
    data: {
      phonetic_uk: '/test/',
      phonetic_us: '/test/',
      meanings: ['测试'],
      collocations: [],
      word_forms: {},
      exam_frequency: 0,
    },
  });

  describe('calculateNextReviewDate', () => {
    it('第1次复习应该在2天内（reviewCount=1, 对应interval=2）', () => {
      const record = createMockRecord(1, 60);
      const nextDate = calculateNextReviewDate(record);
      const lastReview = new Date(record.lastReview);

      // reviewCount=1, intervalIndex=min(1, 5)=1
      // EBBINGHAUS_INTERVALS[1] = 2天
      // mastery=60, masteryFactor=0.6
      // adjustedDays = round(2 * (0.5 + 0.6 * 0.5)) = round(2 * 0.8) = 2
      const interval = Math.floor((nextDate.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));

      expect(interval).toBeGreaterThanOrEqual(1);
      expect(interval).toBeLessThanOrEqual(2);
    });

    it('第2次复习应该在4天内（reviewCount=2, 对应interval=4）', () => {
      const record = createMockRecord(2, 80);
      const nextDate = calculateNextReviewDate(record);
      const lastReview = new Date(record.lastReview);

      // reviewCount=2, intervalIndex=min(2, 5)=2
      // EBBINGHAUS_INTERVALS[2] = 4天
      // mastery=80, masteryFactor=0.8
      // adjustedDays = round(4 * (0.5 + 0.8 * 0.5)) = round(4 * 0.9) = 4
      const interval = Math.floor((nextDate.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));

      expect(interval).toBeGreaterThanOrEqual(3);
      expect(interval).toBeLessThanOrEqual(4);
    });

    it('高掌握度应该延长复习间隔', () => {
      const highMasteryRecord = createMockRecord(3, 90);
      const lowMasteryRecord = createMockRecord(3, 40);

      const highNextDate = calculateNextReviewDate(highMasteryRecord);
      const lowNextDate = calculateNextReviewDate(lowMasteryRecord);

      const highInterval = Math.floor(
        (highNextDate.getTime() - new Date(highMasteryRecord.lastReview).getTime()) / (1000 * 60 * 60 * 24)
      );
      const lowInterval = Math.floor(
        (lowNextDate.getTime() - new Date(lowMasteryRecord.lastReview).getTime()) / (1000 * 60 * 60 * 24)
      );

      expect(highInterval).toBeGreaterThan(lowInterval);
    });

    it('复习次数越多，间隔越长', () => {
      const record1 = createMockRecord(1, 60); // 间隔1天
      const record2 = createMockRecord(2, 60); // 间隔2天
      const record3 = createMockRecord(4, 60); // 间隔7天

      const next1 = calculateNextReviewDate(record1);
      const next2 = calculateNextReviewDate(record2);
      const next3 = calculateNextReviewDate(record3);

      const interval1 = Math.floor((next1.getTime() - new Date(record1.lastReview).getTime()) / (1000 * 60 * 60 * 24));
      const interval2 = Math.floor((next2.getTime() - new Date(record2.lastReview).getTime()) / (1000 * 60 * 60 * 24));
      const interval3 = Math.floor((next3.getTime() - new Date(record3.lastReview).getTime()) / (1000 * 60 * 60 * 24));

      expect(interval1).toBeLessThan(interval2);
      expect(interval2).toBeLessThan(interval3);
    });

    it('复习次数超过最大间隔应使用最后一个间隔（30天）', () => {
      const record = createMockRecord(20, 60); // 远超6次
      const nextDate = calculateNextReviewDate(record);
      const lastReview = new Date(record.lastReview);

      const interval = Math.floor((nextDate.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));

      // 间隔应该基于30天（最后一个间隔）
      expect(interval).toBeGreaterThanOrEqual(15); // 最少15天（mastery=60时）
      expect(interval).toBeLessThanOrEqual(30); // 最多30天
    });
  });

  describe('needsReview', () => {
    it('从未学过的单词不需要复习', () => {
      const record = createMockRecord(0, 0);
      expect(needsReview(record)).toBe(false);
    });

    it('掌握度>=90%的单词不需要复习', () => {
      const record = createMockRecord(5, 92);
      expect(needsReview(record)).toBe(false);
    });

    it('复习日期已到的单词需要复习', () => {
      // 创建一个2天前复习过的记录（掌握度60%，下次复习应该是1天后）
      const record = createMockRecord(1, 60, 2);
      const currentDate = new Date();

      expect(needsReview(record, currentDate)).toBe(true);
    });

    it('复习日期未到的单词不需要复习', () => {
      // 创建一个刚刚复习过的记录
      const record = createMockRecord(1, 60, 0);
      const currentDate = new Date();

      expect(needsReview(record, currentDate)).toBe(false);
    });

    it('应该正确处理边界情况（复习日期正好是今天）', () => {
      // reviewCount=1对应间隔2天，所以2天前复习的现在需要复习
      const record = createMockRecord(1, 60, 2);
      const currentDate = new Date();

      expect(needsReview(record, currentDate)).toBe(true);
    });
  });

  describe('calculateUrgency', () => {
    it('不需要复习的单词紧迫度为0', () => {
      const record = createMockRecord(0, 0);
      expect(calculateUrgency(record)).toBe(0);
    });

    it('刚好到期的单词紧迫度应该在50左右', () => {
      // reviewCount=1对应间隔2天，所以2天前复习的现在刚好到期
      const record = createMockRecord(1, 60, 2);
      const urgency = calculateUrgency(record);

      expect(urgency).toBeGreaterThanOrEqual(50);
      expect(urgency).toBeLessThanOrEqual(60);
    });

    it('超期越久紧迫度越高', () => {
      const record1 = createMockRecord(1, 60, 2); // 超期1天
      const record2 = createMockRecord(1, 60, 5); // 超期4天

      const urgency1 = calculateUrgency(record1);
      const urgency2 = calculateUrgency(record2);

      expect(urgency2).toBeGreaterThan(urgency1);
    });

    it('掌握度越低紧迫度越高', () => {
      const highMasteryRecord = createMockRecord(1, 80, 2);
      const lowMasteryRecord = createMockRecord(1, 20, 2);

      const highUrgency = calculateUrgency(highMasteryRecord);
      const lowUrgency = calculateUrgency(lowMasteryRecord);

      expect(lowUrgency).toBeGreaterThan(highUrgency);
    });

    it('紧迫度不应该超过100', () => {
      // 创建一个超期很久且掌握度很低的记录
      const record = createMockRecord(1, 10, 30);
      const urgency = calculateUrgency(record);

      expect(urgency).toBeLessThanOrEqual(100);
    });
  });

  describe('getWordsNeedingReview', () => {
    it('应该返回所有需要复习的单词', () => {
      const words = [
        createMockWord('word-1'),
        createMockWord('word-2'),
        createMockWord('word-3'),
      ];

      const learningRecords = {
        'word-1': createMockRecord(1, 60, 2), // 需要复习
        'word-2': createMockRecord(0, 0, 0),  // 从未学过
        'word-3': createMockRecord(1, 60, 2), // 需要复习
      };

      const result = getWordsNeedingReview(words, learningRecords);

      expect(result).toHaveLength(2);
      expect(result[0].word.id).toMatch(/word-(1|3)/);
      expect(result[1].word.id).toMatch(/word-(1|3)/);
    });

    it('应该按紧迫度降序排序', () => {
      const words = [
        createMockWord('word-1'),
        createMockWord('word-2'),
      ];

      const learningRecords = {
        'word-1': createMockRecord(1, 80, 2), // 紧迫度较低
        'word-2': createMockRecord(1, 30, 5), // 紧迫度较高（超期更久，掌握度更低）
      };

      const result = getWordsNeedingReview(words, learningRecords);

      expect(result).toHaveLength(2);
      expect(result[0].word.id).toBe('word-2'); // 紧迫度高的排在前面
      expect(result[0].urgency).toBeGreaterThan(result[1].urgency);
    });

    it('没有需要复习的单词时返回空数组', () => {
      const words = [createMockWord('word-1')];
      const learningRecords = {
        'word-1': createMockRecord(1, 60, 0), // 不需要复习
      };

      const result = getWordsNeedingReview(words, learningRecords);

      expect(result).toHaveLength(0);
    });

    it('应该包含正确的urgency和nextReviewDate', () => {
      const words = [createMockWord('word-1')];
      const learningRecords = {
        'word-1': createMockRecord(1, 60, 2),
      };

      const result = getWordsNeedingReview(words, learningRecords);

      expect(result[0].urgency).toBeGreaterThan(0);
      expect(result[0].nextReviewDate).toBeInstanceOf(Date);
    });
  });

  describe('getTodayReviewStats', () => {
    it('应该正确统计今日复习数量', () => {
      const learningRecords = {
        'word-1': createMockRecord(1, 60, 2),  // 需要复习
        'word-2': createMockRecord(1, 60, 0),  // 不需要复习
        'word-3': createMockRecord(1, 30, 5),  // 需要复习（紧急）
      };

      const stats = getTodayReviewStats(learningRecords);

      expect(stats.totalNeedReview).toBe(2);
    });

    it('应该区分紧急和普通复习', () => {
      const learningRecords = {
        'word-1': createMockRecord(1, 60, 2),  // 普通（紧迫度<70）
        'word-2': createMockRecord(1, 30, 10), // 紧急（紧迫度>=70）
      };

      const stats = getTodayReviewStats(learningRecords);

      expect(stats.urgentCount).toBeGreaterThanOrEqual(1);
      expect(stats.normalCount).toBeGreaterThanOrEqual(0);
      expect(stats.totalNeedReview).toBe(stats.urgentCount + stats.normalCount);
    });

    it('没有需要复习的单词时返回全0', () => {
      const learningRecords = {
        'word-1': createMockRecord(1, 60, 0),
        'word-2': createMockRecord(5, 92, 0),
      };

      const stats = getTodayReviewStats(learningRecords);

      expect(stats.totalNeedReview).toBe(0);
      expect(stats.urgentCount).toBe(0);
      expect(stats.normalCount).toBe(0);
    });
  });

  describe('getWeeklyReviewPlan', () => {
    it('应该返回7天的复习计划', () => {
      const words = [createMockWord('word-1')];
      const learningRecords = {
        'word-1': createMockRecord(1, 60, 0),
      };

      const plan = getWeeklyReviewPlan(words, learningRecords);

      expect(plan).toHaveLength(7);
    });

    it('每天的计划应该包含date和count', () => {
      const words = [createMockWord('word-1')];
      const learningRecords = {
        'word-1': createMockRecord(1, 60, 0),
      };

      const plan = getWeeklyReviewPlan(words, learningRecords);

      plan.forEach((day) => {
        expect(day.date).toBeInstanceOf(Date);
        expect(typeof day.count).toBe('number');
        expect(day.count).toBeGreaterThanOrEqual(0);
      });
    });

    it('应该正确计算每天需要复习的单词数', () => {
      const words = [
        createMockWord('word-1'),
        createMockWord('word-2'),
      ];

      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);

      const learningRecords = {
        // word-1 在1天后复习（明天）
        'word-1': {
          ...createMockRecord(1, 60),
          lastReview: yesterday,
        },
        // word-2 在4天后复习
        'word-2': {
          ...createMockRecord(3, 60),
          lastReview: yesterday,
        },
      };

      const plan = getWeeklyReviewPlan(words, learningRecords);

      // 至少有一天应该有复习任务
      const totalReviews = plan.reduce((sum, day) => sum + day.count, 0);
      expect(totalReviews).toBeGreaterThan(0);
    });

    it('日期应该按顺序递增', () => {
      const words = [createMockWord('word-1')];
      const learningRecords = {
        'word-1': createMockRecord(1, 60, 0),
      };

      const plan = getWeeklyReviewPlan(words, learningRecords);

      for (let i = 1; i < plan.length; i++) {
        const prevDate = plan[i - 1].date.getTime();
        const currDate = plan[i].date.getTime();
        const dayDiff = (currDate - prevDate) / (1000 * 60 * 60 * 24);

        expect(dayDiff).toBe(1);
      }
    });
  });
});
