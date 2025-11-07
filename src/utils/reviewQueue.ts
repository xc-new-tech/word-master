// 艾宾浩斯复习队列算法

import { Word, LearningRecord } from '@/types';

// 艾宾浩斯遗忘曲线关键时间点（天）
const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15, 30];

/**
 * 计算单词的下次复习时间
 * @param record 学习记录
 * @returns 下次复习的时间戳
 */
export function calculateNextReviewDate(record: LearningRecord): Date {
  const lastReview = new Date(record.lastReview);
  const reviewCount = record.reviews.length;

  // 根据复习次数选择间隔
  const intervalIndex = Math.min(reviewCount, EBBINGHAUS_INTERVALS.length - 1);
  const daysToAdd = EBBINGHAUS_INTERVALS[intervalIndex];

  // 根据掌握程度调整间隔
  const masteryFactor = record.mastery / 100;
  const adjustedDays = Math.round(daysToAdd * (0.5 + masteryFactor * 0.5));

  const nextReview = new Date(lastReview);
  nextReview.setDate(nextReview.getDate() + adjustedDays);

  return nextReview;
}

/**
 * 判断单词是否需要今天复习
 * @param record 学习记录
 * @param currentDate 当前日期
 * @returns 是否需要复习
 */
export function needsReview(record: LearningRecord, currentDate: Date = new Date()): boolean {
  // 如果从未学过，不需要复习
  if (record.reviews.length === 0) {
    return false;
  }

  // 如果已经完全掌握(90%以上)，延长复习间隔
  if (record.mastery >= 90) {
    return false;
  }

  const nextReviewDate = calculateNextReviewDate(record);
  return nextReviewDate <= currentDate;
}

/**
 * 计算复习紧迫度 (0-100)
 * @param record 学习记录
 * @param currentDate 当前日期
 * @returns 紧迫度分数
 */
export function calculateUrgency(record: LearningRecord, currentDate: Date = new Date()): number {
  if (!needsReview(record, currentDate)) {
    return 0;
  }

  const nextReviewDate = calculateNextReviewDate(record);
  const daysPassed = Math.floor(
    (currentDate.getTime() - nextReviewDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // 超期越久，紧迫度越高
  let urgency = 50 + Math.min(daysPassed * 10, 40);

  // 掌握度越低，紧迫度越高
  urgency += (100 - record.mastery) * 0.1;

  return Math.min(Math.round(urgency), 100);
}

/**
 * 获取需要复习的单词列表
 * @param words 所有单词
 * @param learningRecords 学习记录
 * @param currentDate 当前日期
 * @returns 需要复习的单词列表（按紧迫度排序）
 */
export function getWordsNeedingReview(
  words: Word[],
  learningRecords: Record<string, LearningRecord>,
  currentDate: Date = new Date()
): Array<{ word: Word; urgency: number; nextReviewDate: Date }> {
  const reviewWords: Array<{ word: Word; urgency: number; nextReviewDate: Date }> = [];

  for (const word of words) {
    const record = learningRecords[word.id];

    if (record && needsReview(record, currentDate)) {
      reviewWords.push({
        word,
        urgency: calculateUrgency(record, currentDate),
        nextReviewDate: calculateNextReviewDate(record),
      });
    }
  }

  // 按紧迫度降序排序
  reviewWords.sort((a, b) => b.urgency - a.urgency);

  return reviewWords;
}

/**
 * 获取今日复习统计
 * @param learningRecords 学习记录
 * @param currentDate 当前日期
 * @returns 复习统计
 */
export function getTodayReviewStats(
  learningRecords: Record<string, LearningRecord>,
  currentDate: Date = new Date()
) {
  let totalNeedReview = 0;
  let urgentCount = 0; // 紧迫度 >= 70
  let normalCount = 0; // 紧迫度 < 70

  for (const record of Object.values(learningRecords)) {
    if (needsReview(record, currentDate)) {
      totalNeedReview++;
      const urgency = calculateUrgency(record, currentDate);
      if (urgency >= 70) {
        urgentCount++;
      } else {
        normalCount++;
      }
    }
  }

  return {
    totalNeedReview,
    urgentCount,
    normalCount,
  };
}

/**
 * 获取未来7天的复习计划
 * @param words 所有单词
 * @param learningRecords 学习记录
 * @param currentDate 当前日期
 * @returns 7天复习计划
 */
export function getWeeklyReviewPlan(
  words: Word[],
  learningRecords: Record<string, LearningRecord>,
  currentDate: Date = new Date()
): Array<{ date: Date; count: number }> {
  const plan: Array<{ date: Date; count: number }> = [];

  for (let i = 0; i < 7; i++) {
    const targetDate = new Date(currentDate);
    targetDate.setDate(targetDate.getDate() + i);
    targetDate.setHours(23, 59, 59, 999); // 设置为当天结束

    let count = 0;
    for (const word of words) {
      const record = learningRecords[word.id];
      if (record) {
        const nextReviewDate = calculateNextReviewDate(record);
        if (nextReviewDate <= targetDate && nextReviewDate >= currentDate) {
          count++;
        }
      }
    }

    plan.push({
      date: new Date(targetDate.setHours(0, 0, 0, 0)), // 重置为当天开始
      count,
    });
  }

  return plan;
}
