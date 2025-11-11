import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import { Word, ReviewRecord, LearningRecord } from '@/types';
import { speakWord, isSpeechSupported } from '@/utils/speechSynthesis';
import { getWordsNeedingReview } from '@/utils/reviewQueue';
import { calculateStatistics } from '@/utils/statistics';
import { sampleWords } from '@/data/words';
import WordIllustration from '@/components/WordIllustration';

export default function Review() {
  const navigate = useNavigate();
  const {
    learningRecords,
    updateLearningRecord,
    updateStatistics
  } = useAppStore();

  // 获取需要复习的单词
  const reviewWords = useMemo(() => {
    const needReview = getWordsNeedingReview(sampleWords, learningRecords);
    return needReview.map(item => item.word);
  }, [learningRecords]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState<'review' | 'mastered' | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [reviewResults, setReviewResults] = useState<{ correct: number; incorrect: number }>({
    correct: 0,
    incorrect: 0
  });

  // 如果没有待复习单词，返回Dashboard
  if (reviewWords.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-success mb-4">check_circle</span>
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
            太棒了！
          </h2>
          <p className="text-subtext-light dark:text-subtext-dark mb-6">
            当前没有需要复习的单词
          </p>
          <button
            onClick={() => navigate('/')}
            className="rounded-lg bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const currentWord: Word = reviewWords[currentIndex];
  const progress = ((currentIndex + 1) / reviewWords.length) * 100;

  const handleMark = (status: 'review' | 'mastered') => {
    setShowOverlay(status);

    // 保存复习记录
    const wordId = currentWord.id;
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const correct = status === 'mastered';

    // 创建复习记录
    const reviewRecord: ReviewRecord = {
      date: new Date(),
      correct,
      mode: 'review',
      timeSpent,
    };

    // 更新学习记录
    const existingRecord = learningRecords[wordId];
    if (existingRecord) {
      const newMastery = correct
        ? Math.min(100, existingRecord.mastery + 20)
        : Math.max(0, existingRecord.mastery - 10);

      const newStatus: LearningRecord['status'] =
        newMastery >= 80 ? 'mastered' :
        newMastery >= 40 ? 'learning' :
        newMastery <= 20 ? 'forgotten' : 'learning';

      const updatedRecord: LearningRecord = {
        ...existingRecord,
        lastReview: new Date(),
        reviews: [...existingRecord.reviews, reviewRecord],
        mastery: newMastery,
        status: newStatus,
      };

      const updatedRecords = { ...learningRecords, [wordId]: updatedRecord };

      updateLearningRecord(wordId, {
        lastReview: updatedRecord.lastReview,
        reviews: updatedRecord.reviews,
        mastery: updatedRecord.mastery,
        status: newStatus,
      });

      // 自动重新计算统计数据
      const newStatistics = calculateStatistics(updatedRecords);
      updateStatistics(newStatistics);
    }

    // 更新复习结果统计
    setReviewResults(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      incorrect: prev.incorrect + (correct ? 0 : 1)
    }));

    setTimeout(() => {
      setShowOverlay(null);
      setIsFlipped(false);
      if (currentIndex < reviewWords.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setStartTime(Date.now());
      } else {
        // 复习完成，显示结果
        showReviewSummary();
      }
    }, 500);
  };

  const showReviewSummary = () => {
    const total = reviewResults.correct + reviewResults.incorrect + 1; // +1 是当前单词
    const finalCorrect = reviewResults.correct + (showOverlay === 'mastered' ? 1 : 0);
    const accuracy = Math.round((finalCorrect / total) * 100);

    alert(`复习完成！\n总计：${total}个单词\n掌握：${finalCorrect}个\n需复习：${total - finalCorrect}个\n准确率：${accuracy}%`);
    navigate('/');
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const playPronunciation = () => {
    if (isSpeechSupported) {
      speakWord(currentWord.word, 'us').catch(err => console.error('发音失败:', err));
    } else {
      alert('您的浏览器不支持语音播放功能');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden font-display">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between z-10 w-full max-w-md mx-auto">
        <div
          className="flex size-12 shrink-0 items-center text-text-light dark:text-text-dark cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </div>
        <div className="flex flex-col items-center flex-grow px-4">
          <p className="text-warning text-base font-bold leading-normal tracking-wide shrink-0">
            复习 {currentIndex + 1}/{reviewWords.length}
          </p>
          <div className="w-full h-2 bg-warning/20 rounded-full mt-1">
            <div className="h-full bg-warning rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="flex size-12 shrink-0 items-center justify-end" />
      </div>

      {/* Main Content Area - 复用 Learning 页面的卡片设计 */}
      <main className="flex flex-col flex-grow items-center justify-center p-4 pt-8 relative">
        <div className="w-full max-w-sm h-[60vh] relative flex items-center justify-center">
          {/* Card Stack */}
          {currentIndex + 2 < reviewWords.length && (
            <div
              className="absolute w-[85%] h-full rounded-lg bg-white dark:bg-gray-800 shadow-lg"
              style={{ transform: 'translateY(32px) scale(0.9)', zIndex: 1, filter: 'brightness(0.95)' }}
            />
          )}

          {currentIndex + 1 < reviewWords.length && (
            <div
              className="absolute w-[92.5%] h-full rounded-lg bg-white dark:bg-gray-800 shadow-xl"
              style={{ transform: 'translateY(16px) scale(0.95)', zIndex: 2, filter: 'brightness(0.98)' }}
            />
          )}

          {/* Card with Flip Effect */}
          <div className="absolute w-full h-full z-10" style={{ perspective: '1000px' }}>
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.6s'
              }}
            >
              {/* 卡片正面 */}
              <div
                onClick={handleCardClick}
                className="absolute w-full h-full rounded-lg overflow-hidden shadow-2xl cursor-pointer"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 dark:from-amber-600 dark:via-yellow-700 dark:to-amber-800 p-6 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h1 className="text-text-dark text-5xl font-bold leading-tight font-english mb-2">
                        {currentWord.word}
                      </h1>
                      <p className="text-text-dark/90 text-lg font-normal font-english mb-2">
                        {currentWord.data.phonetic_uk}
                      </p>
                      <p className="text-text-dark/95 text-xl font-medium font-chinese">
                        {currentWord.data.meanings.join('，')}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playPronunciation();
                      }}
                      className="flex items-center justify-center rounded-full h-14 w-14 bg-white/90 hover:bg-white transition-colors flex-shrink-0 shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                      }}
                    >
                      <span className="material-symbols-outlined text-3xl text-white">volume_up</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 overflow-y-auto" style={{ height: 'calc(100% - 180px)' }}>
                  <div className="space-y-4">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-orange-300 via-rose-300 to-pink-300 dark:from-orange-400 dark:via-rose-400 dark:to-pink-400 shadow-lg p-6">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-4/5 h-4/5">
                          <WordIllustration
                            word={currentWord.word}
                            meaning={currentWord.data.meanings.join('')}
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white text-center text-sm font-chinese font-medium drop-shadow-md">
                        {currentWord.data.gameDescription && currentWord.data.gameDescription.length > 25
                          ? currentWord.data.gameDescription.substring(0, 25) + '...'
                          : currentWord.data.gameDescription || '点击卡片查看更多'}
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border-l-4 border-amber-500">
                      <h3 className="text-amber-700 dark:text-amber-400 text-sm font-bold mb-2 font-chinese">
                        💡 记忆提示
                      </h3>
                      <p className="text-text-light dark:text-text-dark text-base leading-relaxed font-chinese">
                        {currentWord.data.gameDescription || currentWord.data.memoryStory || '在语言游戏中理解单词的本质'}
                      </p>
                    </div>

                    <div className="text-center text-subtext-light dark:text-subtext-dark text-sm font-chinese">
                      点击卡片查看详细内容 →
                    </div>
                  </div>
                </div>
              </div>

              {/* 卡片反面 - 详细内容 */}
              <div
                onClick={handleCardClick}
                className="absolute w-full h-full rounded-lg bg-white dark:bg-gray-800 shadow-2xl overflow-y-auto cursor-pointer"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="p-6 space-y-5">
                  {currentWord.data.etymology && (
                    <div>
                      <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
                        词源解析
                      </h3>
                      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border-l-4 border-amber-500">
                        <p className="text-sm text-text-light dark:text-text-dark leading-relaxed font-chinese italic">
                          "{currentWord.data.etymology.meaning}"
                        </p>
                      </div>
                    </div>
                  )}

                  {(currentWord.data.academicContext || currentWord.data.dailyContext) && (
                    <div>
                      <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
                        例句展示
                      </h3>
                      <div className="space-y-3">
                        {currentWord.data.academicContext && (
                          <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-4 border-l-4 border-amber-500">
                            <p className="text-sm text-text-light dark:text-text-dark leading-relaxed font-english">
                              "{currentWord.data.academicContext}"
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {currentWord.data.memoryStory && (
                    <div className="bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 dark:from-orange-900/20 dark:via-rose-900/20 dark:to-pink-900/20 rounded-lg p-4">
                      <h3 className="text-sm font-bold text-orange-700 dark:text-orange-400 mb-2 font-chinese">
                        📖 记忆故事
                      </h3>
                      <p className="text-sm text-text-light dark:text-text-dark leading-relaxed font-chinese">
                        {currentWord.data.memoryStory}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Swipe Action Overlays */}
          <div
            className={`absolute top-1/3 left-4 -rotate-12 transition-opacity ${
              showOverlay === 'review' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="border-4 border-warning text-warning px-6 py-2 rounded-lg">
              <p className="text-2xl font-bold font-chinese">需要复习</p>
            </div>
          </div>
          <div
            className={`absolute top-1/3 right-4 rotate-12 transition-opacity ${
              showOverlay === 'mastered' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="border-4 border-success text-success px-6 py-2 rounded-lg">
              <p className="text-2xl font-bold font-chinese">已掌握</p>
            </div>
          </div>
        </div>
      </main>

      {/* Meta Text */}
      <div className="w-full max-w-md mx-auto p-4 pt-2">
        <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal text-center">
          向左滑"需要复习",向右滑"已掌握"
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-8 p-4 w-full max-w-md mx-auto">
        <button
          onClick={() => handleMark('review')}
          className="flex size-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-warning/20 text-warning hover:bg-warning/30 transition-colors"
        >
          <span className="material-symbols-outlined text-4xl">replay</span>
        </button>
        <button
          onClick={() => handleMark('mastered')}
          className="flex size-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-success/20 text-success hover:bg-success/30 transition-colors"
        >
          <span className="material-symbols-outlined text-4xl">check</span>
        </button>
      </div>
    </div>
  );
}
