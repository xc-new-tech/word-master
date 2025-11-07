import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@/components/TopBar';
import { LearningMode } from '@/types';
import { useAppStore } from '@/store';
import { sampleWords } from '@/data/words';
import { filterByMode } from '@/utils/smartRecommender';

interface ModeOption {
  id: LearningMode;
  icon: string;
  title: string;
  description: string;
  duration: string;
  progress?: { current: number; total: number; percentage: number };
}

export default function ModeSelection() {
  const navigate = useNavigate();
  const { setCurrentWords, setCurrentIndex, learningRecords, userProfile } = useAppStore();
  const [selectedMode, setSelectedMode] = useState<LearningMode>('sequential');

  const modes: ModeOption[] = [
    {
      id: 'sequential',
      icon: 'list_alt',
      title: '顺序学习',
      description: '按照教材单元顺序进行学习和巩固',
      duration: '约20分钟',
      progress: { current: 45, total: 100, percentage: 45 },
    },
    {
      id: 'random',
      icon: 'casino',
      title: '随机探索',
      description: '随机抽取词汇,打破固定思维',
      duration: '约15分钟',
    },
    {
      id: 'smart',
      icon: 'psychology',
      title: '智能推荐',
      description: '根据你的掌握情况,个性化推荐词汇',
      duration: '约15分钟',
    },
    {
      id: 'exam-sprint',
      icon: 'rocket_launch',
      title: '考前冲刺',
      description: '集中学习高频考点词汇',
      duration: '约20分钟',
    },
  ];

  const handleStartLearning = () => {
    // 准备推荐上下文
    const learningRecordsMap = new Map(
      Object.entries(learningRecords).map(([id, record]) => [id, record])
    );

    const context = {
      userLevel: userProfile.grade,
      learningRecords: learningRecordsMap,
      currentDate: new Date(),
    };

    // 将mode id标准化（exam-sprint -> sprint）
    const modeType = selectedMode === 'exam-sprint' ? 'sprint' : selectedMode;

    // 使用智能推荐算法筛选单词
    const filteredWords = filterByMode(
      sampleWords,
      modeType as 'sequential' | 'random' | 'smart' | 'sprint',
      context
    );

    // 设置学习单词列表（默认20个）
    setCurrentWords(filteredWords.slice(0, userProfile.dailyGoal || 20));
    setCurrentIndex(0);
    navigate('/learning');
  };

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col">
      <TopBar
        title="选择学习模式"
        rightIcon={<span className="material-symbols-outlined text-2xl text-warning">help_outline</span>}
      />

      <main className="flex-1 px-4 pb-32 pt-4">
        <div className="flex flex-col space-y-[-16px]">
          {modes.map((mode) => {
            const isSelected = selectedMode === mode.id;
            return (
              <div
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`relative cursor-pointer rounded-xl border p-4 shadow-md transition-all duration-300 ease-in-out ${
                  isSelected
                    ? 'z-10 border-primary bg-card-light dark:bg-card-dark shadow-lg shadow-primary/20 ring-4 ring-primary/20'
                    : 'border-transparent bg-card-light dark:bg-card-dark shadow-slate-500/5 dark:shadow-black/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-3xl">{mode.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-text-light dark:text-text-dark">
                      {mode.title}
                    </p>
                    <p className="mt-0.5 text-sm text-subtext-light dark:text-subtext-dark">
                      {mode.description}
                    </p>
                  </div>
                  {!mode.progress && (
                    <div className="shrink-0">
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">
                        {mode.duration}
                      </p>
                    </div>
                  )}
                </div>

                {/* Progress bar for sequential mode */}
                {mode.progress && (
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">
                      Unit 3 - {mode.progress.percentage}% complete
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                          className="h-1.5 rounded-full bg-success"
                          style={{ width: `${mode.progress.percentage}%` }}
                        />
                      </div>
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark">
                        {mode.progress.percentage}%
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Bottom Action Button */}
      <footer className="fixed bottom-0 z-10 w-full max-w-md bg-gradient-to-t from-background-light to-transparent px-4 pb-6 pt-4 dark:from-background-dark">
        <button
          onClick={handleStartLearning}
          className="h-14 w-full rounded-lg bg-primary text-lg font-bold text-white shadow-lg shadow-primary/40 transition-transform active:scale-[0.98]"
        >
          开始学习
        </button>
      </footer>
    </div>
  );
}
