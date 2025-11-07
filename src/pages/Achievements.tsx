import TopBar from '@/components/TopBar';
import Card from '@/components/Card';

interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  unlocked: boolean;
  color: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: '1',
      icon: 'auto_awesome',
      title: '初来乍到',
      description: '完成第一次学习',
      progress: 1,
      total: 1,
      unlocked: true,
      color: 'success',
    },
    {
      id: '2',
      icon: 'local_fire_department',
      title: '学习达人',
      description: '连续学习7天',
      progress: 7,
      total: 7,
      unlocked: true,
      color: 'error',
    },
    {
      id: '3',
      icon: 'military_tech',
      title: '词汇小王子',
      description: '掌握100个单词',
      progress: 85,
      total: 100,
      unlocked: false,
      color: 'warning',
    },
    {
      id: '4',
      icon: 'school',
      title: '学霸',
      description: '听写正确率达90%以上',
      progress: 3,
      total: 10,
      unlocked: false,
      color: 'primary',
    },
    {
      id: '5',
      icon: 'workspace_premium',
      title: '完美主义者',
      description: '连续10次满分听写',
      progress: 2,
      total: 10,
      unlocked: false,
      color: 'primary',
    },
    {
      id: '6',
      icon: 'emoji_events',
      title: '冠军',
      description: '累计学习1000个单词',
      progress: 240,
      total: 1000,
      unlocked: false,
      color: 'warning',
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col">
      <TopBar title="成就系统" />

      <main className="flex-1 space-y-4 p-4">
        {/* 成就总览 */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-subtext-light dark:text-subtext-dark font-chinese">
                已解锁成就
              </p>
              <p className="text-3xl font-bold text-primary mt-1">
                {unlockedCount}/{achievements.length}
              </p>
            </div>
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-primary text-4xl">
                emoji_events
              </span>
            </div>
          </div>

          {/* 进度条 */}
          <div className="mt-4">
            <div className="flex justify-between text-xs text-subtext-light dark:text-subtext-dark mb-1 font-chinese">
              <span>总体进度</span>
              <span>{Math.round((unlockedCount / achievements.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
              />
            </div>
          </div>
        </Card>

        {/* 成就列表 */}
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className={achievement.unlocked ? 'border-l-4 border-success' : 'opacity-75'}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex size-14 shrink-0 items-center justify-center rounded-full ${
                    achievement.unlocked
                      ? `bg-${achievement.color}/20 text-${achievement.color}`
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl">{achievement.icon}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-bold text-text-light dark:text-text-dark font-chinese">
                      {achievement.title}
                    </p>
                    {achievement.unlocked && (
                      <span className="material-symbols-outlined text-success text-lg">
                        check_circle
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
                    {achievement.description}
                  </p>

                  {/* 进度 */}
                  {!achievement.unlocked && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-subtext-light dark:text-subtext-dark mb-1">
                        <span className="font-chinese">进度</span>
                        <span>
                          {achievement.progress}/{achievement.total}
                        </span>
                      </div>
                      <div className="h-1.5 bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-${achievement.color} transition-all duration-300`}
                          style={{
                            width: `${(achievement.progress / achievement.total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {achievement.unlocked && (
                    <p className="text-xs text-success mt-1 font-chinese">
                      🎉 已于 2025-11-06 解锁
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 励志文字 */}
        <div className="text-center py-8">
          <p className="text-sm text-subtext-light dark:text-subtext-dark font-chinese">
            继续努力,解锁更多成就!
          </p>
          <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
            每一个成就都是进步的见证 🌟
          </p>
        </div>
      </main>
    </div>
  );
}
