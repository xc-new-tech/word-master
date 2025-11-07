import { useAppStore } from '@/store';
import TopBar from '@/components/TopBar';
import Card from '@/components/Card';

export default function Settings() {
  const { userProfile, setUserProfile, theme, toggleTheme } = useAppStore();

  const handleDailyGoalChange = (goal: number) => {
    setUserProfile({ dailyGoal: goal });
  };

  const handlePronunciationChange = (pronunciation: 'uk' | 'us') => {
    setUserProfile({
      settings: { ...userProfile.settings, pronunciation },
    });
  };

  const handleFontSizeChange = (fontSize: 'small' | 'medium' | 'large' | 'extra-large') => {
    setUserProfile({
      settings: { ...userProfile.settings, fontSize },
    });
  };

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col">
      <TopBar title="设置" />

      <main className="flex-1 space-y-6 p-4">
        {/* 学习设置 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            学习设置
          </h3>
          <Card>
            <div className="space-y-4">
              {/* 每日目标 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                    每日新词目标
                  </p>
                  <p className="text-sm font-bold text-primary">{userProfile.dailyGoal}词</p>
                </div>
                <div className="flex gap-2">
                  {[10, 20, 30, 50].map((goal) => (
                    <button
                      key={goal}
                      onClick={() => handleDailyGoalChange(goal)}
                      className={`flex-1 h-10 rounded-lg text-sm font-medium transition-all ${
                        userProfile.dailyGoal === goal
                          ? 'bg-primary text-white'
                          : 'bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border-light dark:bg-border-dark" />

              {/* 学习模式 */}
              <div>
                <p className="text-sm font-medium text-text-light dark:text-text-dark mb-2 font-chinese">
                  默认学习模式
                </p>
                <select
                  value={userProfile.preferredMode}
                  onChange={(e) =>
                    setUserProfile({
                      preferredMode: e.target.value as any,
                    })
                  }
                  className="w-full h-10 px-3 rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:border-primary focus:outline-none font-chinese"
                >
                  <option value="sequential">顺序学习</option>
                  <option value="random">随机探索</option>
                  <option value="smart">智能推荐</option>
                  <option value="exam-sprint">考前冲刺</option>
                </select>
              </div>
            </div>
          </Card>
        </div>

        {/* 显示设置 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            显示设置
          </h3>
          <Card>
            <div className="space-y-4">
              {/* 主题 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                    深色模式
                  </p>
                  <p className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                    保护眼睛,节省电量
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    theme === 'dark' ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="h-px bg-border-light dark:bg-border-dark" />

              {/* 字体大小 */}
              <div>
                <p className="text-sm font-medium text-text-light dark:text-text-dark mb-2 font-chinese">
                  字体大小
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { value: 'small', label: '小' },
                    { value: 'medium', label: '中' },
                    { value: 'large', label: '大' },
                    { value: 'extra-large', label: '特大' },
                  ].map((size) => (
                    <button
                      key={size.value}
                      onClick={() => handleFontSizeChange(size.value as any)}
                      className={`h-10 rounded-lg text-sm font-medium transition-all font-chinese ${
                        userProfile.settings.fontSize === size.value
                          ? 'bg-primary text-white'
                          : 'bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* 语音设置 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            语音设置
          </h3>
          <Card>
            <div className="space-y-4">
              {/* 发音 */}
              <div>
                <p className="text-sm font-medium text-text-light dark:text-text-dark mb-2 font-chinese">
                  发音偏好
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handlePronunciationChange('uk')}
                    className={`h-10 rounded-lg text-sm font-medium transition-all font-chinese ${
                      userProfile.settings.pronunciation === 'uk'
                        ? 'bg-primary text-white'
                        : 'bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary'
                    }`}
                  >
                    英式发音
                  </button>
                  <button
                    onClick={() => handlePronunciationChange('us')}
                    className={`h-10 rounded-lg text-sm font-medium transition-all font-chinese ${
                      userProfile.settings.pronunciation === 'us'
                        ? 'bg-primary text-white'
                        : 'bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-primary'
                    }`}
                  >
                    美式发音
                  </button>
                </div>
              </div>

              <div className="h-px bg-border-light dark:bg-border-dark" />

              {/* 声音开关 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                    语音播放
                  </p>
                  <p className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                    自动播放单词发音
                  </p>
                </div>
                <button
                  onClick={() =>
                    setUserProfile({
                      settings: {
                        ...userProfile.settings,
                        soundEnabled: !userProfile.settings.soundEnabled,
                      },
                    })
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    userProfile.settings.soundEnabled
                      ? 'bg-primary'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      userProfile.settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* 其他设置 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            其他
          </h3>
          <Card>
            <div className="space-y-3">
              <button className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-light dark:text-text-dark">
                    info
                  </span>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                    关于我们
                  </p>
                </div>
                <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                  chevron_right
                </span>
              </button>

              <div className="h-px bg-border-light dark:bg-border-dark" />

              <button className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-light dark:text-text-dark">
                    help
                  </span>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                    帮助中心
                  </p>
                </div>
                <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                  chevron_right
                </span>
              </button>

              <div className="h-px bg-border-light dark:bg-border-dark" />

              <button className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-text-light dark:text-text-dark">
                    mail
                  </span>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                    意见反馈
                  </p>
                </div>
                <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                  chevron_right
                </span>
              </button>
            </div>
          </Card>
        </div>

        {/* 数据管理 */}
        <div>
          <h3 className="text-sm font-bold text-subtext-light dark:text-subtext-dark mb-3 font-chinese">
            数据管理
          </h3>
          <Card>
            <div className="space-y-3">
              <button className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-success">cloud_upload</span>
                  <p className="text-sm font-medium text-text-light dark:text-text-dark font-chinese">
                    导出学习数据
                  </p>
                </div>
                <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                  chevron_right
                </span>
              </button>

              <div className="h-px bg-border-light dark:bg-border-dark" />

              <button className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-error">delete</span>
                  <p className="text-sm font-medium text-error font-chinese">清除所有数据</p>
                </div>
                <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                  chevron_right
                </span>
              </button>
            </div>
          </Card>
        </div>

        <div className="text-center text-xs text-subtext-light dark:text-subtext-dark py-4 font-chinese">
          <p>版本 1.0.0</p>
        </div>
      </main>
    </div>
  );
}
