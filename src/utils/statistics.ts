import { LearningRecord, Statistics } from '@/types';

/**
 * 从学习记录计算统计数据
 */
export function calculateStatistics(
  learningRecords: Record<string, LearningRecord>
): Statistics {
  const records = Object.values(learningRecords);
  const today = new Date().toDateString();

  // 总学习单词数
  const totalWords = records.length;

  // 已掌握单词数（mastery >= 80）
  const masteredWords = records.filter(r => r.mastery >= 80).length;

  // 今日新学单词数
  const todayNewWords = records.filter(
    r => new Date(r.firstSeen).toDateString() === today
  ).length;

  // 今日复习次数
  const todayReviews = records.reduce((count, record) => {
    const todayReviewCount = record.reviews.filter(
      review => new Date(review.date).toDateString() === today
    ).length;
    return count + todayReviewCount;
  }, 0);

  // 计算连续学习天数
  const streak = calculateStreak(records);

  // 计算准确率
  const accuracy = calculateAccuracy(records);

  return {
    totalWords,
    masteredWords,
    todayNewWords,
    todayReviews,
    streak,
    accuracy,
  };
}

/**
 * 计算连续学习天数
 */
function calculateStreak(records: LearningRecord[]): number {
  if (records.length === 0) return 0;

  // 获取所有学习日期（去重）
  const learningDates = new Set<string>();
  records.forEach(record => {
    record.reviews.forEach(review => {
      learningDates.add(new Date(review.date).toDateString());
    });
  });

  // 将日期排序
  const sortedDates = Array.from(learningDates)
    .map(dateStr => new Date(dateStr))
    .sort((a, b) => b.getTime() - a.getTime()); // 降序

  if (sortedDates.length === 0) return 0;

  // 检查今天是否学习了
  const today = new Date().toDateString();
  if (sortedDates[0].toDateString() !== today) {
    // 今天没学习，检查昨天
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (sortedDates[0].toDateString() !== yesterday.toDateString()) {
      return 0; // 连续记录中断
    }
  }

  // 计算连续天数
  let streak = 1;
  for (let i = 1; i < sortedDates.length; i++) {
    const diff = Math.floor(
      (sortedDates[i - 1].getTime() - sortedDates[i].getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

/**
 * 计算总体准确率
 */
function calculateAccuracy(records: LearningRecord[]): number {
  const allReviews = records.flatMap(r => r.reviews);
  if (allReviews.length === 0) return 0;

  const correctCount = allReviews.filter(r => r.correct).length;
  return Math.round((correctCount / allReviews.length) * 100);
}
