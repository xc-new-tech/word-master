import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import TopBar from '@/components/TopBar';
import Card from '@/components/Card';
import CircularProgress from '@/components/CircularProgress';
import BottomNav from '@/components/BottomNav';
import LearningCurveChart from '@/components/LearningCurveChart';
import { useMemo } from 'react';
import { getTodayReviewStats } from '@/utils/reviewQueue';

export default function Dashboard() {
  const navigate = useNavigate();
  const { theme, toggleTheme, learningRecords } = useAppStore();

  // 模拟本周学习数据
  const weeklyActivity = [
    { day: 'Sun', value: 10 },
    { day: 'Mon', value: 50 },
    { day: 'Tue', value: 80 },
    { day: 'Wed', value: 100 },
    { day: 'Thu', value: 50 },
    { day: 'Fri', value: 40 },
    { day: 'Sat', value: 20 }, // 今天
  ];

  // 生成学习曲线数据（基于真实学习记录生成模拟数据）
  const learningCurveData = useMemo(() => {
    return weeklyActivity.map(({ day }, index) => {
      // 根据热力图数据生成词数
      const baseCount = weeklyActivity[index].value;
      const count = Math.floor((baseCount / 100) * 20); // 转换为学习词数
      return {
        date: day,
        count: count,
      };
    });
  }, []);

  // 计算今日复习统计
  const reviewStats = useMemo(() => {
    return getTodayReviewStats(learningRecords);
  }, [learningRecords]);

  const getActivityColor = (value: number) => {
    if (value >= 80) return 'bg-success';
    if (value >= 50) return 'bg-warning/50';
    if (value >= 20) return 'bg-error/40';
    return 'bg-primary/10';
  };

  return (
    <div className="mx-auto flex h-auto min-h-screen w-full max-w-md flex-col">
      <TopBar
        title="学习统计"
        showBack={false}
        rightIcon={
          <span className="material-symbols-outlined text-2xl">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        }
        onRightIconClick={toggleTheme}
      />

      <div className="flex-1 space-y-4 p-4">
        {/* Weekly Streak Card */}
        <Card>
          <h2 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">
            每周学习打卡
          </h2>
          <div className="grid grid-cols-7 gap-2 text-center">
            {/* Days of the week headers */}
            {weeklyActivity.map(({ day }) => (
              <div key={day} className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
                {day}
              </div>
            ))}
            {/* Heatmap cells */}
            {weeklyActivity.map(({ day, value }, index) => (
              <div
                key={`cell-${day}`}
                className={`flex aspect-square items-center justify-center rounded ${getActivityColor(
                  value
                )} ${
                  index === 6
                    ? 'ring-2 ring-primary bg-primary/20 text-primary font-bold'
                    : ''
                }`}
              />
            ))}
          </div>
        </Card>

        {/* Review Reminder Card */}
        {reviewStats.totalNeedReview > 0 && (
          <Card className="bg-gradient-to-r from-warning/10 to-error/10 border-2 border-warning/30">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-warning/20">
                <span className="material-symbols-outlined text-3xl text-warning">schedule</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark font-chinese">
                  今日待复习
                </h3>
                <p className="text-sm text-subtext-light dark:text-subtext-dark mt-1 font-chinese">
                  {reviewStats.totalNeedReview}个单词等待复习
                  {reviewStats.urgentCount > 0 && (
                    <span className="text-error font-medium"> · {reviewStats.urgentCount}个紧急</span>
                  )}
                </p>
              </div>
              <button
                onClick={() => {
                  // TODO: 导航到复习页面
                  alert('复习功能开发中...');
                }}
                className="rounded-lg bg-warning px-4 py-2 text-sm font-medium text-white hover:bg-warning/90 transition-colors font-chinese"
              >
                开始复习
              </button>
            </div>
          </Card>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
              总学习
            </p>
            <p className="mt-2 text-2xl font-bold text-text-light dark:text-text-dark">
              1,240 <span className="text-base font-medium">词</span>
            </p>
          </Card>

          <Card className="flex flex-col items-center">
            <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark w-full">
              今日新词
            </p>
            <div className="mt-2">
              <CircularProgress value={15} max={20} />
            </div>
          </Card>

          <Card>
            <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
              掌握率
            </p>
            <p className="mt-2 text-2xl font-bold text-text-light dark:text-text-dark">
              85%
            </p>
          </Card>
        </div>

        {/* Chart Section */}
        <Card>
          <div className="space-y-4">
            {/* Chart Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Segmented Buttons for Chart Type */}
              <div className="flex flex-1 items-center justify-center rounded bg-background-light dark:bg-background-dark p-1 border border-border-light dark:border-border-dark">
                <label className="flex cursor-pointer h-9 grow items-center justify-center overflow-hidden rounded px-2 has-[:checked]:bg-primary has-[:checked]:text-white text-subtext-light dark:text-subtext-dark text-sm font-medium transition-colors">
                  <span>趋势</span>
                  <input
                    type="radio"
                    name="chart-type"
                    value="趋势"
                    defaultChecked
                    className="invisible w-0"
                  />
                </label>
                <label className="flex cursor-pointer h-9 grow items-center justify-center overflow-hidden rounded px-2 has-[:checked]:bg-primary has-[:checked]:text-white text-subtext-light dark:text-subtext-dark text-sm font-medium transition-colors">
                  <span>分布</span>
                  <input
                    type="radio"
                    name="chart-type"
                    value="分布"
                    className="invisible w-0"
                  />
                </label>
                <label className="flex cursor-pointer h-9 grow items-center justify-center overflow-hidden rounded px-2 has-[:checked]:bg-primary has-[:checked]:text-white text-subtext-light dark:text-subtext-dark text-sm font-medium transition-colors">
                  <span>对比</span>
                  <input
                    type="radio"
                    name="chart-type"
                    value="对比"
                    className="invisible w-0"
                  />
                </label>
              </div>

              {/* Time Range Selector */}
              <div className="flex h-9 items-center justify-center rounded bg-background-light dark:bg-background-dark p-1 border border-border-light dark:border-border-dark">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded px-3 has-[:checked]:bg-card-light has-[:checked]:dark:bg-card-dark text-subtext-light dark:text-subtext-dark has-[:checked]:text-text-light has-[:checked]:dark:text-text-dark text-sm font-medium transition-colors">
                  <span>周</span>
                  <input
                    type="radio"
                    name="time-range"
                    value="周"
                    defaultChecked
                    className="invisible w-0"
                  />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded px-3 has-[:checked]:bg-card-light has-[:checked]:dark:bg-card-dark text-subtext-light dark:text-subtext-dark has-[:checked]:text-text-light has-[:checked]:dark:text-text-dark text-sm font-medium transition-colors">
                  <span>月</span>
                  <input
                    type="radio"
                    name="time-range"
                    value="月"
                    className="invisible w-0"
                  />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded px-3 has-[:checked]:bg-card-light has-[:checked]:dark:bg-card-dark text-subtext-light dark:text-subtext-dark has-[:checked]:text-text-light has-[:checked]:dark:text-text-dark text-sm font-medium transition-colors">
                  <span>年</span>
                  <input
                    type="radio"
                    name="time-range"
                    value="年"
                    className="invisible w-0"
                  />
                </label>
              </div>
            </div>

            {/* Learning Curve Chart */}
            <div className="relative w-full">
              <LearningCurveChart data={learningCurveData} height={220} showGrid={true} />
            </div>

            {/* Export Button */}
            <button className="mt-2 self-end flex items-center gap-2 rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-2 text-sm font-medium text-primary dark:text-indigo-300 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
              <span className="material-symbols-outlined text-base">ios_share</span>
              <span>导出报告</span>
            </button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 pb-20">
          <button
            onClick={() => navigate('/mode-selection')}
            className="h-24 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all active:scale-[0.98] font-chinese"
          >
            开始学习
          </button>
          <button
            onClick={() => navigate('/dictation')}
            className="h-24 rounded-lg border-2 border-primary text-primary font-bold text-lg hover:bg-primary/10 transition-all active:scale-[0.98] font-chinese"
          >
            单词听写
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
