import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import TopBar from '@/components/TopBar';
import Card from '@/components/Card';
import BottomNav from '@/components/BottomNav';

export default function Profile() {
  const navigate = useNavigate();
  const { userProfile } = useAppStore();

  const stats = [
    { label: '连续学习', value: '7', unit: '天', color: 'primary' },
    { label: '累计学习', value: '30', unit: '天', color: 'success' },
    { label: '总词汇量', value: '1240', unit: '词', color: 'warning' },
  ];

  const menuItems = [
    { icon: 'person', label: '个人信息', path: '/profile/edit' },
    { icon: 'emoji_events', label: '成就系统', path: '/achievements' },
    { icon: 'leaderboard', label: '学习排行', path: '/leaderboard' },
    { icon: 'history', label: '学习记录', path: '/history' },
    { icon: 'settings', label: '设置', path: '/settings' },
  ];

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col pb-20">
      <TopBar title="个人中心" showBack={false} />

      <main className="flex-1 space-y-6 p-4">
        {/* 用户信息卡片 */}
        <Card className="text-center">
          <div className="flex flex-col items-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <span className="material-symbols-outlined text-5xl">account_circle</span>
            </div>
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark font-chinese">
              WordMaster 学习者
            </h2>
            <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
              {userProfile.grade} · 每日目标 {userProfile.dailyGoal}词
            </p>
          </div>
        </Card>

        {/* 学习统计 */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <p
                className={`text-3xl font-bold ${
                  stat.color === 'primary'
                    ? 'text-primary'
                    : stat.color === 'success'
                    ? 'text-success'
                    : 'text-warning'
                }`}
              >
                {stat.value}
              </p>
              <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
                {stat.label}
              </p>
              <p className="text-xs text-subtext-light dark:text-subtext-dark font-chinese">
                {stat.unit}
              </p>
            </Card>
          ))}
        </div>

        {/* 本周学习 */}
        <Card>
          <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
            本周学习
          </h3>
          <div className="grid grid-cols-7 gap-2 text-center">
            {['日', '一', '二', '三', '四', '五', '六'].map((day, index) => (
              <div key={day}>
                <div className="text-xs text-subtext-light dark:text-subtext-dark mb-1 font-chinese">
                  {day}
                </div>
                <div
                  className={`aspect-square rounded flex items-center justify-center text-xs font-bold ${
                    index < 5
                      ? 'bg-success text-white'
                      : index === 5
                      ? 'bg-error/40 text-white'
                      : 'bg-primary/20 text-primary ring-2 ring-primary'
                  }`}
                >
                  {index < 5 ? '✓' : index === 5 ? '×' : '今'}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 菜单列表 */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Card
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <p className="text-base font-medium text-text-light dark:text-text-dark font-chinese">
                  {item.label}
                </p>
              </div>
              <span className="material-symbols-outlined text-subtext-light dark:text-subtext-dark">
                chevron_right
              </span>
            </Card>
          ))}
        </div>

        {/* 版本信息 */}
        <div className="text-center text-xs text-subtext-light dark:text-subtext-dark py-4 font-chinese">
          <p>WordMaster v1.0.0</p>
          <p className="mt-1">© 2025 单词大师学习系统</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
