import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import BottomNav from '@/components/BottomNav';
import { DictationMode } from '@/types';

interface ModeOption {
  id: DictationMode;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export default function DictationModeSelection() {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<DictationMode>('en-to-cn');
  const [wordCount, setWordCount] = useState(20);

  const modes: ModeOption[] = [
    {
      id: 'en-to-cn',
      icon: 'headphones',
      title: '英译中听写',
      description: '听英文发音,写出中文意思',
      color: 'primary',
    },
    {
      id: 'cn-to-en',
      icon: 'edit_note',
      title: '中译英听写',
      description: '看中文意思,拼写英文单词',
      color: 'success',
    },
  ];

  const wordCountOptions = [10, 20, 30, 50];

  const handleStart = () => {
    navigate(`/dictation/${selectedMode}`, { state: { wordCount } });
  };

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col pb-20">
      <TopBar title="听写模式" showBack={false} />

      <main className="flex-1 px-4 pb-32 pt-4 space-y-6">
        {/* 模式选择 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            选择听写模式
          </h3>
          <div className="space-y-3">
            {modes.map((mode) => {
              const isSelected = selectedMode === mode.id;
              return (
                <div
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all duration-300 ${
                    isSelected
                      ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20 ring-2 ring-primary/20'
                      : 'border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${
                        mode.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                      }`}
                    >
                      <span className="material-symbols-outlined text-3xl">{mode.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-text-light dark:text-text-dark font-chinese">
                        {mode.title}
                      </p>
                      <p className="mt-0.5 text-sm text-subtext-light dark:text-subtext-dark font-chinese">
                        {mode.description}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <span className="material-symbols-outlined text-base">check</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 单词数量选择 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            听写单词数量
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {wordCountOptions.map((count) => (
              <button
                key={count}
                onClick={() => setWordCount(count)}
                className={`h-14 rounded-lg font-bold text-lg transition-all ${
                  wordCount === count
                    ? 'bg-primary text-white shadow-lg shadow-primary/40'
                    : 'bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary'
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        {/* 听写来源 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            听写来源
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark cursor-pointer hover:border-primary transition-colors">
              <input
                type="radio"
                name="source"
                value="today"
                defaultChecked
                className="w-4 h-4 text-primary"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                  今日新词
                </p>
                <p className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                  今天学习的单词
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark cursor-pointer hover:border-primary transition-colors">
              <input type="radio" name="source" value="review" className="w-4 h-4 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                  复习词汇
                </p>
                <p className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                  需要复习的单词
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark cursor-pointer hover:border-primary transition-colors">
              <input type="radio" name="source" value="mistakes" className="w-4 h-4 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                  错题本
                </p>
                <p className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                  之前听写错误的单词
                </p>
              </div>
            </label>
          </div>
        </div>
      </main>

      {/* 开始按钮 */}
      <footer className="fixed bottom-0 z-10 w-full max-w-md bg-gradient-to-t from-background-light to-transparent dark:from-background-dark px-4 pb-6 pt-4">
        <button
          onClick={handleStart}
          className="h-14 w-full rounded-lg bg-primary text-lg font-bold text-white shadow-lg shadow-primary/40 transition-transform active:scale-[0.98]"
        >
          开始听写 ({wordCount}词)
        </button>
      </footer>

      <BottomNav />
    </div>
  );
}
