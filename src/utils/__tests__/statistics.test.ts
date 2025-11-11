import { describe, it, expect, beforeEach } from 'vitest';
import { calculateStatistics } from '../statistics';
import { LearningRecord } from '@/types';

describe('statistics', () => {
  let mockRecords: Record<string, LearningRecord>;

  beforeEach(() => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    mockRecords = {
      'word-1': {
        wordId: 'word-1',
        firstSeen: today,
        lastReview: today,
        reviews: [
          { date: today, correct: true, mode: 'learn', timeSpent: 30 },
        ],
        mastery: 85,
        status: 'mastered',
      },
      'word-2': {
        wordId: 'word-2',
        firstSeen: yesterday,
        lastReview: yesterday,
        reviews: [
          { date: yesterday, correct: true, mode: 'learn', timeSpent: 25 },
          { date: today, correct: false, mode: 'review', timeSpent: 20 },
        ],
        mastery: 60,
        status: 'learning',
      },
      'word-3': {
        wordId: 'word-3',
        firstSeen: twoDaysAgo,
        lastReview: twoDaysAgo,
        reviews: [
          { date: twoDaysAgo, correct: true, mode: 'learn', timeSpent: 30 },
        ],
        mastery: 90,
        status: 'mastered',
      },
    };
  });

  describe('calculateStatistics', () => {
    it('应该正确计算总学习单词数', () => {
      const stats = calculateStatistics(mockRecords);
      expect(stats.totalWords).toBe(3);
    });

    it('应该正确计算已掌握单词数（mastery>=80）', () => {
      const stats = calculateStatistics(mockRecords);
      expect(stats.masteredWords).toBe(2); // word-1 (85) 和 word-3 (90)
    });

    it('应该正确计算今日新学单词数', () => {
      const stats = calculateStatistics(mockRecords);
      expect(stats.todayNewWords).toBe(1); // 只有 word-1 是今天学的
    });

    it('应该正确计算今日复习次数', () => {
      const stats = calculateStatistics(mockRecords);
      expect(stats.todayReviews).toBe(2); // word-1 的1次 + word-2 的1次
    });

    it('应该计算连续学习天数', () => {
      const stats = calculateStatistics(mockRecords);
      expect(stats.streak).toBeGreaterThanOrEqual(0);
    });

    it('应该计算准确率', () => {
      const stats = calculateStatistics(mockRecords);
      // 总共4次复习，3次正确，准确率75%
      expect(stats.accuracy).toBe(75);
    });

    it('空记录应该返回全0', () => {
      const stats = calculateStatistics({});
      expect(stats.totalWords).toBe(0);
      expect(stats.masteredWords).toBe(0);
      expect(stats.todayNewWords).toBe(0);
      expect(stats.todayReviews).toBe(0);
      expect(stats.streak).toBe(0);
      expect(stats.accuracy).toBe(0);
    });

    it('全部错误的准确率应该是0', () => {
      const wrongRecords: Record<string, LearningRecord> = {
        'word-1': {
          wordId: 'word-1',
          firstSeen: new Date(),
          lastReview: new Date(),
          reviews: [
            { date: new Date(), correct: false, mode: 'learn', timeSpent: 30 },
            { date: new Date(), correct: false, mode: 'review', timeSpent: 20 },
          ],
          mastery: 20,
          status: 'new',
        },
      };

      const stats = calculateStatistics(wrongRecords);
      expect(stats.accuracy).toBe(0);
    });

    it('全部正确的准确率应该是100', () => {
      const correctRecords: Record<string, LearningRecord> = {
        'word-1': {
          wordId: 'word-1',
          firstSeen: new Date(),
          lastReview: new Date(),
          reviews: [
            { date: new Date(), correct: true, mode: 'learn', timeSpent: 30 },
            { date: new Date(), correct: true, mode: 'review', timeSpent: 20 },
          ],
          mastery: 95,
          status: 'mastered',
        },
      };

      const stats = calculateStatistics(correctRecords);
      expect(stats.accuracy).toBe(100);
    });

    it('应该正确处理连续3天的学习记录', () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const twoDaysAgo = new Date(today);
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

      const consecutiveRecords: Record<string, LearningRecord> = {
        'word-1': {
          wordId: 'word-1',
          firstSeen: twoDaysAgo,
          lastReview: today,
          reviews: [
            { date: twoDaysAgo, correct: true, mode: 'learn', timeSpent: 30 },
            { date: yesterday, correct: true, mode: 'review', timeSpent: 20 },
            { date: today, correct: true, mode: 'review', timeSpent: 15 },
          ],
          mastery: 95,
          status: 'mastered',
        },
      };

      const stats = calculateStatistics(consecutiveRecords);
      expect(stats.streak).toBe(3);
    });
  });
});
