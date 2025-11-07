import { useNavigate, useLocation } from 'react-router-dom';
import { Word } from '@/types';
import TopBar from '@/components/TopBar';
import Card from '@/components/Card';

interface Answer {
  word: Word;
  userAnswer: string;
  correct: boolean;
}

export default function DictationResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const answers: Answer[] = location.state?.answers || [];

  const correctCount = answers.filter((a) => a.correct).length;
  const totalCount = answers.length;
  const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  const getResultEmoji = () => {
    if (accuracy >= 90) return '🎉';
    if (accuracy >= 70) return '👏';
    if (accuracy >= 50) return '💪';
    return '📚';
  };

  const getResultText = () => {
    if (accuracy >= 90) return '太棒了!';
    if (accuracy >= 70) return '不错哦!';
    if (accuracy >= 50) return '继续加油!';
    return '需要多练习!';
  };

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col bg-background-light dark:bg-background-dark">
      <TopBar title="听写结果" showBack={false} />

      <main className="flex-1 space-y-6 p-4 pb-20">
        {/* 结果总览 */}
        <Card className="text-center">
          <div className="text-6xl mb-4">{getResultEmoji()}</div>
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2 font-chinese">
            {getResultText()}
          </h2>
          <div className="flex items-center justify-center gap-8 mt-6">
            <div>
              <p className="text-4xl font-bold text-primary">{accuracy}%</p>
              <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
                正确率
              </p>
            </div>
            <div className="h-12 w-px bg-border-light dark:bg-border-dark" />
            <div>
              <p className="text-4xl font-bold text-success">{correctCount}</p>
              <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
                正确
              </p>
            </div>
            <div className="h-12 w-px bg-border-light dark:bg-border-dark" />
            <div>
              <p className="text-4xl font-bold text-error">{totalCount - correctCount}</p>
              <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
                错误
              </p>
            </div>
          </div>
        </Card>

        {/* 详细结果 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            详细结果
          </h3>
          <div className="space-y-2">
            {answers.map((answer, index) => (
              <Card
                key={index}
                className={`${
                  answer.correct
                    ? 'border-l-4 border-success'
                    : 'border-l-4 border-error'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-lg font-bold text-text-light dark:text-text-dark font-english">
                        {answer.word.word}
                      </p>
                      {answer.correct ? (
                        <span className="material-symbols-outlined text-success text-xl">
                          check_circle
                        </span>
                      ) : (
                        <span className="material-symbols-outlined text-error text-xl">
                          cancel
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark font-chinese">
                      正确答案: {answer.word.data.meanings.join(', ')}
                    </p>
                    {!answer.correct && answer.userAnswer && (
                      <p className="text-sm text-error mt-1 font-chinese">
                        你的答案: {answer.userAnswer}
                      </p>
                    )}
                    {!answer.userAnswer && (
                      <p className="text-sm text-warning mt-1 font-chinese">已跳过</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 错误单词统计 */}
        {totalCount - correctCount > 0 && (
          <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-warning text-xl">lightbulb</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-text-light dark:text-text-dark font-chinese">
                  学习建议
                </p>
                <p className="mt-1 text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                  发现 {totalCount - correctCount} 个错误,建议重点复习这些单词,并查看词根分析和记忆故事
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 底部操作 */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark p-4">
        <div className="mx-auto max-w-md flex gap-3">
          <button
            onClick={() => navigate('/mistakes')}
            className="flex-1 h-12 rounded-lg border-2 border-error text-error font-bold hover:bg-error/10 transition-colors font-chinese"
          >
            查看错题本
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex-1 h-12 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all font-chinese"
          >
            返回首页
          </button>
        </div>
      </div>
    </div>
  );
}
