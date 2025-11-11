import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useAppStore } from '@/store';
import TopBar from '@/components/TopBar';
import Card from '@/components/Card';
import BottomNav from '@/components/BottomNav';
import { useModal } from '@/hooks/useModal';

export default function Profile() {
  const navigate = useNavigate();
  const { userProfile, currentUser, logout, learningRecords } = useAppStore();
  const { confirm, ModalComponent } = useModal();

  const handleLogout = () => {
    confirm('退出登录', '确定要退出登录吗？', () => {
      logout();
    });
  };

  const handleSwitchAccount = () => {
    confirm('切换账号', '确定要切换账号吗？当前学习进度会被保存。', () => {
      logout();
    });
  };

  // 计算真实的学习统计数据
  const stats = useMemo(() => {
    const records = Object.values(learningRecords);

    // 计算连续学习天数
    const calculateStreak = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // 获取所有学习日期并排序
      const learningDates = new Set<string>();
      records.forEach(record => {
        record.reviews.forEach(review => {
          const reviewDate = new Date(review.date);
          reviewDate.setHours(0, 0, 0, 0);
          learningDates.add(reviewDate.toDateString());
        });
      });

      const sortedDates = Array.from(learningDates)
        .map(dateStr => new Date(dateStr))
        .sort((a, b) => b.getTime() - a.getTime());

      if (sortedDates.length === 0) return 0;

      // 检查是否今天学习过
      const lastStudyDate = sortedDates[0];
      const daysDiff = Math.floor((today.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24));

      // 如果最后学习日期超过1天前，连续天数为0
      if (daysDiff > 1) return 0;

      // 计算连续天数
      let streak = 1;
      for (let i = 1; i < sortedDates.length; i++) {
        const currentDate = sortedDates[i];
        const prevDate = sortedDates[i - 1];
        const diff = Math.floor((prevDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

        if (diff === 1) {
          streak++;
        } else {
          break;
        }
      }

      return streak;
    };

    // 计算累计学习天数
    const calculateTotalDays = () => {
      const learningDates = new Set<string>();
      records.forEach(record => {
        record.reviews.forEach(review => {
          const reviewDate = new Date(review.date);
          reviewDate.setHours(0, 0, 0, 0);
          learningDates.add(reviewDate.toDateString());
        });
      });
      return learningDates.size;
    };

    // 计算总词汇量（已学习的单词数）
    const totalWords = records.length;

    return [
      { label: '连续学习', value: String(calculateStreak()), unit: '天', color: 'primary' as const },
      { label: '累计学习', value: String(calculateTotalDays()), unit: '天', color: 'success' as const },
      { label: '总词汇量', value: String(totalWords), unit: '词', color: 'warning' as const },
    ];
  }, [learningRecords]);

  // 计算本周学习情况
  const weeklyData = useMemo(() => {
    const today = new Date();
    const currentDayOfWeek = today.getDay(); // 0-6 (Sunday-Saturday)

    // 获取所有学习日期
    const learningDates = new Set<string>();
    Object.values(learningRecords).forEach(record => {
      record.reviews.forEach(review => {
        const reviewDate = new Date(review.date);
        reviewDate.setHours(0, 0, 0, 0);
        learningDates.add(reviewDate.toDateString());
      });
    });

    // 生成本周的7天数据
    return ['日', '一', '二', '三', '四', '五', '六'].map((day, index) => {
      const targetDate = new Date(today);
      const daysAgo = (currentDayOfWeek - index + 7) % 7;
      targetDate.setDate(today.getDate() - daysAgo);
      targetDate.setHours(0, 0, 0, 0);

      const isToday = index === currentDayOfWeek;
      const hasLearned = learningDates.has(targetDate.toDateString());

      let status: 'completed' | 'missed' | 'today' | 'future';
      if (isToday) {
        status = hasLearned ? 'completed' : 'today';
      } else if (targetDate > today) {
        status = 'future';
      } else {
        status = hasLearned ? 'completed' : 'missed';
      }

      return { day, status };
    });
  }, [learningRecords]);

  const menuItems = [
    { icon: 'person', label: '个人信息', path: '/profile/edit', type: 'nav' as const },
    { icon: 'emoji_events', label: '成就系统', path: '/achievements', type: 'nav' as const },
    { icon: 'leaderboard', label: '学习排行', path: '/leaderboard', type: 'nav' as const },
    { icon: 'history', label: '学习记录', path: '/history', type: 'nav' as const },
    { icon: 'settings', label: '设置', path: '/settings', type: 'nav' as const },
    { icon: 'swap_horiz', label: '切换账号', action: handleSwitchAccount, type: 'action' as const },
    { icon: 'logout', label: '退出登录', action: handleLogout, type: 'action' as const },
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
              {currentUser || 'WordMaster 学习者'}
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
            {weeklyData.map((item) => (
              <div key={item.day}>
                <div className="text-xs text-subtext-light dark:text-subtext-dark mb-1 font-chinese">
                  {item.day}
                </div>
                <div
                  className={`aspect-square rounded flex items-center justify-center text-xs font-bold ${
                    item.status === 'completed'
                      ? 'bg-success text-white'
                      : item.status === 'missed'
                      ? 'bg-error/40 text-white'
                      : item.status === 'today'
                      ? 'bg-primary/20 text-primary ring-2 ring-primary'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  }`}
                >
                  {item.status === 'completed'
                    ? '✓'
                    : item.status === 'missed'
                    ? '×'
                    : item.status === 'today'
                    ? '今'
                    : '-'}
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
              onClick={() => {
                if (item.type === 'nav') {
                  navigate(item.path);
                } else if (item.type === 'action' && item.action) {
                  item.action();
                }
              }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className={`flex size-10 items-center justify-center rounded-full ${
                  item.label === '退出登录' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'
                }`}>
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <p className={`text-base font-medium font-chinese ${
                  item.label === '退出登录' ? 'text-error' : 'text-text-light dark:text-text-dark'
                }`}>
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
      {ModalComponent}
    </div>
  );
}
