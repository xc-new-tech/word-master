import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import { Word } from '@/types';
import { speakWord, isSpeechSupported } from '@/utils/speechSynthesis';
import WordIllustration from '@/components/WordIllustration';

export default function Learning() {
  const navigate = useNavigate();
  const { currentWords, currentIndex, setCurrentIndex, currentMode, sequentialProgress, setSequentialProgress } = useAppStore();
  const [showOverlay, setShowOverlay] = useState<'review' | 'mastered' | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  if (currentWords.length === 0) {
    navigate('/mode-selection');
    return null;
  }

  const currentWord: Word = currentWords[currentIndex];
  const progress = ((currentIndex + 1) / currentWords.length) * 100;

  const handleMark = (status: 'review' | 'mastered') => {
    setShowOverlay(status);

    setTimeout(() => {
      setShowOverlay(null);
      setIsFlipped(false); // 重置翻转状态
      if (currentIndex < currentWords.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // 学习完成
        // 如果是顺序学习模式，更新学习进度
        if (currentMode === 'sequential') {
          setSequentialProgress(sequentialProgress + currentWords.length);
        }
        alert('恭喜完成今日学习!');
        navigate('/');
      }
    }, 500);
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
          <p className="text-primary text-base font-bold leading-normal tracking-wide shrink-0">
            {currentIndex + 1}/{currentWords.length}
          </p>
          <div className="w-full h-2 bg-primary/20 rounded-full mt-1">
            <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="flex size-12 shrink-0 items-center justify-end" />
      </div>

      {/* Main Content Area */}
      <main className="flex flex-col flex-grow items-center justify-center p-4 pt-8 relative">
        <div className="w-full max-w-sm h-[60vh] relative flex items-center justify-center">
          {/* Card Stack */}
          {/* Card 3 (Back) */}
          {currentIndex + 2 < currentWords.length && (
            <div
              className="absolute w-[85%] h-full rounded-lg bg-white dark:bg-gray-800 shadow-lg"
              style={{ transform: 'translateY(32px) scale(0.9)', zIndex: 1, filter: 'brightness(0.95)' }}
            />
          )}

          {/* Card 2 (Middle) */}
          {currentIndex + 1 < currentWords.length && (
            <div
              className="absolute w-[92.5%] h-full rounded-lg bg-white dark:bg-gray-800 shadow-xl"
              style={{ transform: 'translateY(16px) scale(0.95)', zIndex: 2, filter: 'brightness(0.98)' }}
            />
          )}

          {/* Card 1 (Front - Active) with Flip Effect */}
          <div
            className="absolute w-full h-full z-10"
            style={{ perspective: '1000px' }}
          >
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
                {/* 金色渐变顶部 */}
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

                {/* 白色内容区域 */}
                <div className="bg-white dark:bg-gray-800 p-6 overflow-y-auto" style={{ height: 'calc(100% - 180px)' }}>
                  <div className="space-y-4">
                    {/* 插画区域 */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-orange-300 via-rose-300 to-pink-300 dark:from-orange-400 dark:via-rose-400 dark:to-pink-400 shadow-lg p-6">
                      {/* SVG插画 */}
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-4/5 h-4/5">
                          <WordIllustration
                            word={currentWord.word}
                            meaning={currentWord.data.meanings.join('')}
                          />
                        </div>
                      </div>
                      {/* 底部描述文字 */}
                      <div className="absolute bottom-3 left-4 right-4 text-white text-center text-sm font-chinese font-medium drop-shadow-md">
                        {currentWord.data.gameDescription && currentWord.data.gameDescription.length > 25
                          ? currentWord.data.gameDescription.substring(0, 25) + '...'
                          : currentWord.data.gameDescription || '点击卡片查看更多'}
                      </div>
                    </div>

                    {/* 记忆提示 */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border-l-4 border-amber-500">
                      <h3 className="text-amber-700 dark:text-amber-400 text-sm font-bold mb-2 font-chinese">
                        💡 记忆提示
                      </h3>
                      <p className="text-text-light dark:text-text-dark text-base leading-relaxed font-chinese">
                        {currentWord.data.gameDescription || currentWord.data.memoryStory || '在语言游戏中理解单词的本质，通过真实场景建立记忆连接'}
                      </p>
                    </div>

                    {/* 快速提示：点击翻转 */}
                    <div className="text-center text-subtext-light dark:text-subtext-dark text-sm font-chinese">
                      点击卡片查看详细内容 →
                    </div>
                  </div>
                </div>
              </div>

              {/* 卡片反面 */}
              <div
                onClick={handleCardClick}
                className="absolute w-full h-full rounded-lg bg-white dark:bg-gray-800 shadow-2xl overflow-y-auto cursor-pointer"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="p-6 space-y-5">
                  {/* 词源解析 */}
                  {currentWord.data.etymology && (
                    <div>
                      <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
                        词源解析
                      </h3>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        {currentWord.data.etymology.prefix && (
                          <>
                            <div className="flex-1 max-w-[90px] rounded-lg bg-stone-100 dark:bg-stone-700 p-3 text-center">
                              <p className="text-lg font-bold text-stone-700 dark:text-stone-200 font-english">
                                {currentWord.data.etymology.prefix}
                              </p>
                              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-chinese">前缀</p>
                              <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 font-chinese">在...之上</p>
                            </div>
                            <span className="text-stone-400 dark:text-stone-500">+</span>
                          </>
                        )}
                        <div className="flex-1 max-w-[90px] rounded-lg bg-stone-100 dark:bg-stone-700 p-3 text-center">
                          <p className="text-lg font-bold text-stone-700 dark:text-stone-200 font-english">
                            {currentWord.data.etymology.root}
                          </p>
                          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-chinese">词根</p>
                          <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 font-chinese">核心含义</p>
                        </div>
                        {currentWord.data.etymology.suffix && (
                          <>
                            <span className="text-stone-400 dark:text-stone-500">+</span>
                            <div className="flex-1 max-w-[90px] rounded-lg bg-stone-100 dark:bg-stone-700 p-3 text-center">
                              <p className="text-lg font-bold text-stone-700 dark:text-stone-200 font-english">
                                {currentWord.data.etymology.suffix}
                              </p>
                              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-chinese">后缀</p>
                              <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 font-chinese">形容词</p>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border-l-4 border-amber-500">
                        <p className="text-sm text-text-light dark:text-text-dark leading-relaxed font-chinese italic">
                          "{currentWord.data.etymology.meaning}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 例句展示 */}
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
                      {currentWord.data.dailyContext && (
                        <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-4 border-l-4 border-amber-500">
                          <p className="text-sm text-text-light dark:text-text-dark leading-relaxed font-english">
                            "{currentWord.data.dailyContext}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 记忆故事 */}
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

                  {/* 使用场景 */}
                  {(currentWord.data.academicContext || currentWord.data.dailyContext) && (
                    <div>
                      <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
                        使用场景
                      </h3>
                      <div className="space-y-3">
                        {currentWord.data.academicContext && (
                          <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-4">
                            <p className="text-xs font-bold text-stone-600 dark:text-stone-400 mb-2 font-chinese">
                              艺术评论：
                            </p>
                            <p className="text-sm text-text-light dark:text-text-dark leading-relaxed font-english">
                              "{currentWord.data.academicContext}"
                            </p>
                          </div>
                        )}
                        {currentWord.data.dailyContext && (
                          <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-4">
                            <p className="text-xs font-bold text-stone-600 dark:text-stone-400 mb-2 font-chinese">
                              日常生活：
                            </p>
                            <p className="text-sm text-text-light dark:text-text-dark leading-relaxed font-english">
                              "{currentWord.data.dailyContext}"
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 词汇关系 */}
                  {currentWord.data.confusableWords && currentWord.data.confusableWords.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
                        词汇关系
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-bold text-stone-600 dark:text-stone-400 mb-2 font-chinese">近义词</p>
                          <div className="space-y-1">
                            {currentWord.data.confusableWords.slice(0, 2).map((word, index) => (
                              <p key={index} className="text-sm text-text-light dark:text-text-dark font-english">
                                • {word}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-600 dark:text-stone-400 mb-2 font-chinese">反义词</p>
                          <div className="space-y-1">
                            {currentWord.data.confusableWords.slice(2, 4).map((word, index) => (
                              <p key={index} className="text-sm text-text-light dark:text-text-dark font-english">
                                • {word}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 常用搭配 */}
                  {currentWord.data.collocations.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-2 font-chinese">
                        常用搭配
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentWord.data.collocations.slice(0, 6).map((collocation, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-700 text-text-light dark:text-text-dark text-sm font-english"
                          >
                            {collocation}
                          </span>
                        ))}
                      </div>
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

      {/* Meta Text / Gesture Hints */}
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
