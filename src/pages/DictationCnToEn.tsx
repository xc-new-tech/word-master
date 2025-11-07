import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sampleWords } from '@/data/words';
import { Word } from '@/types';

export default function DictationCnToEn() {
  const navigate = useNavigate();
  const location = useLocation();
  const wordCount = location.state?.wordCount || 20;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [answers, setAnswers] = useState<{ word: Word; userAnswer: string; correct: boolean }[]>([]);
  const [showHint, setShowHint] = useState(false);

  const words = sampleWords.slice(0, Math.min(wordCount, sampleWords.length));
  const currentWord = words[currentIndex];
  const progress = ((currentIndex + 1) / words.length) * 100;

  const checkSpelling = (input: string): boolean => {
    const normalizedInput = input.trim().toLowerCase();
    const normalizedWord = currentWord.word.toLowerCase();

    // 完全匹配
    if (normalizedInput === normalizedWord) return true;

    // 容错: 允许1-2个字符差异
    if (Math.abs(normalizedInput.length - normalizedWord.length) <= 1) {
      let diff = 0;
      for (let i = 0; i < Math.min(normalizedInput.length, normalizedWord.length); i++) {
        if (normalizedInput[i] !== normalizedWord[i]) diff++;
      }
      return diff <= 2;
    }

    return false;
  };

  const handleSubmit = () => {
    const isCorrect = checkSpelling(userAnswer);

    setAnswers([...answers, { word: currentWord, userAnswer, correct: isCorrect }]);

    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setShowHint(false);
    } else {
      navigate('/dictation/result', {
        state: { answers: [...answers, { word: currentWord, userAnswer, correct: isCorrect }] },
      });
    }
  };

  const handleSkip = () => {
    setAnswers([...answers, { word: currentWord, userAnswer: '', correct: false }]);

    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setShowHint(false);
    } else {
      navigate('/dictation/result', {
        state: { answers: [...answers, { word: currentWord, userAnswer: '', correct: false }] },
      });
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
          <p className="text-success text-base font-bold leading-normal tracking-wide">
            {currentIndex + 1}/{words.length}
          </p>
          <div className="w-full h-2 bg-success/20 rounded-full mt-1">
            <div
              className="h-full bg-success rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="flex size-12 shrink-0" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 max-w-md mx-auto w-full">
        <div className="w-full space-y-8">
          {/* 中文释义展示 */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark font-chinese">
              {currentWord.data.meanings[0]}
            </h2>
            {currentWord.data.meanings.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2">
                {currentWord.data.meanings.slice(1).map((meaning, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-chinese"
                  >
                    {meaning}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 输入框 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-text-light dark:text-text-dark font-chinese">
                请拼写英文单词
              </label>
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs text-primary hover:text-primary/80 font-chinese"
              >
                {showHint ? '隐藏提示' : '显示提示'}
              </button>
            </div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="输入英文拼写..."
              className="w-full h-14 px-4 rounded-lg border-2 border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark text-lg focus:border-success focus:outline-none transition-colors font-english"
              autoFocus
            />
            {showHint && (
              <p className="text-sm text-primary font-english">
                提示: {currentWord.word.charAt(0)}
                {'*'.repeat(currentWord.word.length - 1)}
              </p>
            )}
          </div>

          {/* 音标提示 */}
          <div className="text-center">
            <p className="text-lg text-subtext-light dark:text-subtext-dark font-english">
              {currentWord.data.phonetic_uk}
            </p>
          </div>

          {/* 提示信息 */}
          <div className="p-4 rounded-lg bg-success/5 border border-success/20">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-success text-xl">info</span>
              <div className="flex-1">
                <p className="text-sm text-text-light dark:text-text-dark font-chinese">
                  <strong>评分标准:</strong>
                </p>
                <ul className="mt-1 text-xs text-subtext-light dark:text-subtext-dark space-y-1 font-chinese">
                  <li>• 完全正确: 拼写完全匹配</li>
                  <li>• 部分正确: 拼写错误≤2个字符</li>
                  <li>• 错误: 拼写差异较大</li>
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
              ? 'bg-success text-white shadow-lg shadow-success/40 hover:shadow-success/60'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          提交答案
        </button>
      </div>
    </div>
  );
}
