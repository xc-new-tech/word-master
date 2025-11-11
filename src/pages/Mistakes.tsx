import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import Card from '@/components/Card';
import { sampleWords } from '@/data/words';
import { speakWord, isSpeechSupported } from '@/utils/speechSynthesis';

export default function Mistakes() {
  const navigate = useNavigate();
  // 模拟错题数据
  const [mistakeWords] = useState(sampleWords.slice(0, 3));

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col">
      <TopBar title="错题本" />

      <main className="flex-1 space-y-4 p-4">
        {/* 统计卡片 */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-subtext-light dark:text-subtext-dark font-chinese">
                错题总数
              </p>
              <p className="text-3xl font-bold text-error mt-1">{mistakeWords.length}</p>
            </div>
            <div className="flex size-16 items-center justify-center rounded-full bg-error/10">
              <span className="material-symbols-outlined text-error text-4xl">error</span>
            </div>
          </div>
        </Card>

        {/* 筛选选项 */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap font-chinese">
            全部
          </button>
          <button className="px-4 py-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-medium whitespace-nowrap hover:border-primary transition-colors font-chinese">
            听写错误
          </button>
          <button className="px-4 py-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-medium whitespace-nowrap hover:border-primary transition-colors font-chinese">
            拼写错误
          </button>
          <button className="px-4 py-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-medium whitespace-nowrap hover:border-primary transition-colors font-chinese">
            释义错误
          </button>
        </div>

        {/* 错题列表 */}
        <div className="space-y-3">
          {mistakeWords.map((word) => (
            <Card
              key={word.id}
              onClick={() => navigate(`/word/${word.id}`)}
              className="border-l-4 border-error"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xl font-bold text-text-light dark:text-text-dark font-english">
                      {word.word}
                    </p>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-error/10 text-error font-chinese">
                      错误3次
                    </span>
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark font-english">
                    {word.data.phonetic_uk}
                  </p>
                  <p className="text-sm text-text-light dark:text-text-dark mt-1 font-chinese">
                    {word.data.meanings.join(', ')}
                  </p>

                  {/* 错误记录 */}
                  <div className="mt-2 space-y-1">
                    <div className="text-xs text-error font-chinese">
                      <span className="font-medium">最近错误:</span> 2025-11-05 听写错误
                    </div>
                    <div className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                      易错点: 拼写容易混淆
                    </div>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSpeechSupported) {
                      speakWord(word.word, 'us').catch(err => console.error('发音失败:', err));
                    }
                  }}
                  className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">volume_up</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {mistakeWords.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark text-6xl mb-4">
              check_circle
            </span>
            <p className="text-lg font-medium text-subtext-light dark:text-subtext-dark font-chinese">
              太棒了!暂无错题
            </p>
            <p className="text-sm text-subtext-light dark:text-subtext-dark mt-2 font-chinese">
              继续保持,加油!
            </p>
          </div>
        )}
      </main>

      {/* 底部操作 */}
      {mistakeWords.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark p-4">
          <div className="mx-auto max-w-md">
            <button className="h-14 w-full rounded-lg bg-primary text-lg font-bold text-white shadow-lg shadow-primary/40 transition-transform active:scale-[0.98] font-chinese">
              重新听写错题 ({mistakeWords.length}词)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
