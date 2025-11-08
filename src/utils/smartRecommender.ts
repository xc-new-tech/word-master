import { Word, LearningRecord } from '@/types';

/**
 * 智能单词推荐算法
 * 基于以下因素:
 * 1. 学习记录（掌握程度、复习次数）
 * 2. 单词频率（高频优先）
 * 3. 年级难度（循序渐进）
 * 4. 遗忘曲线（需要复习的优先）
 */

interface RecommendationContext {
  userLevel: '初一' | '初二' | '初三';
  learningRecords: Map<string, LearningRecord>;
  currentDate: Date;
  sequentialProgress?: number; // 顺序学习的进度（已学习到第几个单词）
}

/**
 * 计算单词优先级分数
 */
export function calculatePriority(
  word: Word,
  context: RecommendationContext
): number {
  let score = 0;

  // 1. 频率权重 (0-30分)
  if (word.frequency === '高频') score += 30;
  else if (word.frequency === '中频') score += 20;
  else score += 10;

  // 2. 年级匹配度 (0-25分)
  const levelScore = {
    '初一': { '初一': 25, '初二': 15, '初三': 5 },
    '初二': { '初一': 15, '初二': 25, '初三': 15 },
    '初三': { '初一': 10, '初二': 20, '初三': 25 },
  };
  score += levelScore[context.userLevel][word.level];

  // 3. 学习状态 (0-45分)
  const record = context.learningRecords.get(word.id);
  if (!record) {
    // 新词，根据频率给分
    score += word.frequency === '高频' ? 45 : 35;
  } else {
    // 根据掌握程度和遗忘曲线
    const masteryBonus = (100 - record.mastery) * 0.3; // 0-30分
    const forgettingFactor = calculateForgettingFactor(record, context.currentDate);
    score += masteryBonus + forgettingFactor * 15; // 0-15分
  }

  return score;
}

/**
 * 计算遗忘因子（基于艾宾浩斯遗忘曲线）
 * 返回值 0-1，1表示最需要复习
 */
function calculateForgettingFactor(
  record: LearningRecord,
  currentDate: Date
): number {
  if (!record.lastReview) return 1;

  const daysPassed = Math.floor(
    (currentDate.getTime() - record.lastReview.getTime()) / (1000 * 60 * 60 * 24)
  );

  // 艾宾浩斯遗忘曲线关键时间点
  const criticalPoints = [1, 2, 4, 7, 15];

  // 如果在关键时间点附近，遗忘因子较高
  for (const point of criticalPoints) {
    if (Math.abs(daysPassed - point) <= 1) {
      return 0.9;
    }
  }

  // 根据掌握程度调整
  const masteryFactor = 1 - record.mastery / 100;

  // 时间越长，遗忘越多（但有上限）
  const timeFactor = Math.min(daysPassed / 30, 1);

  return masteryFactor * 0.6 + timeFactor * 0.4;
}

/**
 * 智能推荐单词列表
 */
export function recommendWords(
  allWords: Word[],
  context: RecommendationContext,
  count: number = 20
): Word[] {
  // 计算每个单词的优先级
  const scoredWords = allWords.map((word) => ({
    word,
    score: calculatePriority(word, context),
  }));

  // 按分数排序
  scoredWords.sort((a, b) => b.score - a.score);

  // 返回前N个单词
  return scoredWords.slice(0, count).map((item) => item.word);
}

/**
 * 根据学习模式筛选单词
 */
export function filterByMode(
  words: Word[],
  mode: 'sequential' | 'random' | 'smart' | 'sprint',
  context: RecommendationContext
): Word[] {
  switch (mode) {
    case 'sequential':
      // 按单元顺序排序
      const sorted = [...words].sort((a, b) => {
        const unitA = parseInt(a.unit.replace('Unit ', ''));
        const unitB = parseInt(b.unit.replace('Unit ', ''));
        return unitA - unitB;
      });

      // 根据进度返回单词（从上次学习的位置继续）
      const progress = context.sequentialProgress || 0;

      // 如果已经学完所有单词，从头开始
      if (progress >= sorted.length) {
        return sorted;
      }

      // 从进度位置开始返回剩余单词
      return sorted.slice(progress);

    case 'random':
      // 随机打乱
      return shuffleArray([...words]);

    case 'smart':
      // 智能推荐
      return recommendWords(words, context);

    case 'sprint':
      // 考前冲刺：高频词 + 需要复习的词
      const highFreq = words.filter((w) => w.frequency === '高频');
      const needReview = words.filter((w) => {
        const record = context.learningRecords.get(w.id);
        return record && record.mastery < 80;
      });
      const combined = [...new Set([...highFreq, ...needReview])];
      return combined.sort((a, b) => calculatePriority(b, context) - calculatePriority(a, context));

    default:
      return words;
  }
}

/**
 * 随机打乱数组
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * 获取需要复习的单词
 */
export function getWordsForReview(
  allWords: Word[],
  context: RecommendationContext,
  count: number = 20
): Word[] {
  const reviewWords = allWords.filter((word) => {
    const record = context.learningRecords.get(word.id);
    if (!record) return false;

    // 需要复习的条件：
    // 1. 掌握程度 < 80%
    // 2. 在艾宾浩斯关键时间点附近
    const needsReview = record.mastery < 80;
    const forgettingFactor = calculateForgettingFactor(record, context.currentDate);

    return needsReview || forgettingFactor > 0.7;
  });

  // 按优先级排序
  reviewWords.sort((a, b) => calculatePriority(b, context) - calculatePriority(a, context));

  return reviewWords.slice(0, count);
}

/**
 * 获取今日推荐学习的单词
 */
export function getTodayRecommendation(
  allWords: Word[],
  context: RecommendationContext,
  dailyTarget: number = 20
): Word[] {
  // 1. 优先复习昨天学习的词（巩固记忆）
  const yesterdayWords = allWords.filter((word) => {
    const record = context.learningRecords.get(word.id);
    if (!record || !record.lastReview) return false;

    const daysPassed = Math.floor(
      (context.currentDate.getTime() - record.lastReview.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysPassed === 1;
  });

  // 2. 需要复习的词
  const reviewWords = getWordsForReview(allWords, context, Math.floor(dailyTarget * 0.3));

  // 3. 新词
  const newWords = allWords.filter((word) => !context.learningRecords.has(word.id));
  const recommendedNew = recommendWords(newWords, context, Math.floor(dailyTarget * 0.5));

  // 组合并去重
  const combined = [...new Set([...yesterdayWords, ...reviewWords, ...recommendedNew])];

  return combined.slice(0, dailyTarget);
}
