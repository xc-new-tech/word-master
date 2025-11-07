import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sampleWords } from '@/data/words';
import { Word } from '@/types';

export default function DictationEnToCn() {
  const navigate = useNavigate();
  const location = useLocation();
  const wordCount = location.state?.wordCount || 20;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answers, setAnswers] = useState<{ word: Word; userAnswer: string; correct: boolean }[]>([]);
  const [playCount, setPlayCount] = useState(0);

  // 使用示例单词
  const words = sampleWords.slice(0, Math.min(wordCount, sampleWords.length));
  const currentWord = words[currentIndex];
  const progress = ((currentIndex + 1) / words.length) * 100;

  const playAudio = () => {
    if (playCount < 3) {
      console.log('播放发音:', currentWord.word);
      setPlayCount(playCount + 1);
    }
  };

  const handleSubmit = () => {
    const isCorrect = currentWord.data.meanings.some((meaning) =>
      userAnswer.trim().includes(meaning)
    );

    setAnswers([...answers, { word: currentWord, userAnswer, correct: isCorrect }]);

    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setPlayCount(0);
    } else {
      // 完成听写
      navigate('/dictation/result', { state: { answers: [...answers, { word: currentWord, userAnswer, correct: isCorrect }] } });
    }
  };

  const handleSkip = () => {
    setAnswers([...answers, { word: currentWord, userAnswer: '', correct: false }]);

    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setPlayCount(0);
    } else {
      navigate('/dictation/result', { state: { answers: [...answers, { word: currentWord, userAnswer: '', correct: false }] } });
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      {/* Top Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between z-10 w-full max-w-md mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex size-12 shrink-0 items-center text-text-light dark:text-text-dark"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        <div className="flex flex-col items-center flex-grow px-4">
          <p className="text-primary text-base font-bold leading-normal tracking-wide">
            {currentIndex + 1}/{words.length}
          </p>
          <div className="w-full h-2 bg-primary/20 rounded-full mt-1">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="flex size-12 shrink-0" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 max-w-md mx-auto w-full">
        <div className="w-full space-y-8">
          {/* 播放按钮 */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={playAudio}
              disabled={playCount >= 3}
              className={`flex items-center justify-center rounded-full h-24 w-24 transition-all ${
                playCount >= 3
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-primary/20 text-primary hover:bg-primary/30 active:scale-95'
              }`}
            >
              <span className="material-symbols-outlined text-6xl">volume_up</span>
            </button>
            <p className="text-sm text-subtext-light dark:text-subtext-dark font-chinese">
              可播放 {3 - playCount} 次
            </p>

            {/* 显示音标 */}
            <p className="text-2xl font-medium text-text-light dark:text-text-dark font-english">
              {currentWord.data.phonetic_uk}
            </p>
          </div>

          {/* 输入框 */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-light dark:text-text-dark font-chinese">
              请输入中文意思
            </label>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="输入中文释义..."
              className="w-full h-14 px-4 rounded-lg border-2 border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark text-lg focus:border-primary focus:outline-none transition-colors font-chinese"
              autoFocus
            />
            <p className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
              提示: 输入主要含义即可,支持多个含义
            </p>
          </div>

          {/* 提示信息 */}
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-xl">info</span>
              <div className="flex-1">
                <p className="text-sm text-text-light dark:text-text-dark font-chinese">
                  <strong>评分标准:</strong>
                </p>
                <ul className="mt-1 text-xs text-subtext-light dark:text-subtext-dark space-y-1 font-chinese">
                  <li>• 完全正确: 包含主要中文释义</li>
                  <li>• 部分正确: 含义相近</li>
                  <li>• 错误: 释义不匹配</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 p-4 w-full max-w-md mx-auto">
        <button
          onClick={handleSkip}
          className="flex-1 h-12 rounded-lg border-2 border-subtext-light dark:border-subtext-dark text-subtext-light dark:text-subtext-dark font-bold hover:bg-subtext-light/10 transition-colors font-chinese"
        >
          跳过
        </button>
        <button
          onClick={handleSubmit}
          disabled={!userAnswer.trim()}
          className={`flex-1 h-12 rounded-lg font-bold transition-all font-chinese ${
            userAnswer.trim()
              ? 'bg-primary text-white shadow-lg shadow-primary/40 hover:shadow-primary/60'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          提交答案
        </button>
      </div>
    </div>
  );
}
