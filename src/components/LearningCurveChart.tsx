// 学习曲线图表组件

interface DataPoint {
  date: string;
  count: number;
}

interface LearningCurveChartProps {
  data: DataPoint[];
  height?: number;
  showGrid?: boolean;
}

export default function LearningCurveChart({
  data,
  height = 200,
  showGrid = true,
}: LearningCurveChartProps) {
  if (data.length === 0) {
    return (
      <div
        className="flex items-center justify-center text-subtext-light dark:text-subtext-dark"
        style={{ height }}
      >
        <p className="text-sm">暂无数据</p>
      </div>
    );
  }

  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartHeight = height - padding.top - padding.bottom;

  // 计算数据范围
  const maxValue = Math.max(...data.map(d => d.count), 10);
  const minValue = 0;
  const valueRange = maxValue - minValue;

  // 生成Y轴刻度
  const yTicks = [0, Math.ceil(maxValue / 2), maxValue];

  // 生成路径数据
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = ((maxValue - d.count) / valueRange) * chartHeight;
    return { x, y, count: d.count };
  });

  const pathData = points
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      // 使用平滑曲线
      const prevPoint = points[i - 1];
      const controlX1 = (prevPoint.x + p.x) / 2;
      const controlX2 = (prevPoint.x + p.x) / 2;
      return `C ${controlX1} ${prevPoint.y}, ${controlX2} ${p.y}, ${p.x} ${p.y}`;
    })
    .join(' ');

  // 生成填充区域路径
  const areaPathData =
    pathData +
    ` L ${points[points.length - 1].x} ${chartHeight}` +
    ` L ${points[0].x} ${chartHeight}` +
    ' Z';

  return (
    <div className="relative w-full" style={{ height }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* 网格线 */}
        {showGrid && (
          <g className="opacity-10">
            {yTicks.map((tick, i) => {
              const y = padding.top + ((maxValue - tick) / valueRange) * chartHeight;
              return (
                <line
                  key={`grid-${i}`}
                  x1="0"
                  y1={y}
                  x2="100"
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-text-light dark:text-text-dark"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </g>
        )}

        {/* 渐变定义 */}
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(102, 126, 234)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(102, 126, 234)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* 填充区域 */}
        <g transform={`translate(0, ${padding.top})`}>
          <path
            d={areaPathData}
            fill="url(#areaGradient)"
            className="transition-all duration-300"
          />

          {/* 曲线 */}
          <path
            d={pathData}
            fill="none"
            stroke="rgb(102, 126, 234)"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300"
            vectorEffect="non-scaling-stroke"
          />

          {/* 数据点 */}
          {points.map((point, i) => (
            <g key={`point-${i}`}>
              <circle
                cx={point.x}
                cy={point.y}
                r="0.8"
                fill="white"
                stroke="rgb(102, 126, 234)"
                strokeWidth="0.4"
                className="transition-all duration-300 hover:r-1.5"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          ))}
        </g>
      </svg>

      {/* Y轴标签 */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
        {yTicks.map((tick, i) => (
          <div
            key={`y-label-${i}`}
            className="text-xs text-subtext-light dark:text-subtext-dark font-medium"
            style={{ marginTop: i === 0 ? padding.top : 0, marginBottom: i === yTicks.length - 1 ? padding.bottom : 0 }}
          >
            {tick}
          </div>
        ))}
      </div>

      {/* X轴标签 */}
      <div className="absolute left-0 right-0 bottom-0 flex justify-between px-10 pb-2 pointer-events-none">
        {data.map((d, i) => {
          // 只显示部分标签，避免拥挤
          if (data.length > 7 && i % 2 !== 0) return null;
          return (
            <div
              key={`x-label-${i}`}
              className="text-xs text-subtext-light dark:text-subtext-dark"
            >
              {d.date}
            </div>
          );
        })}
      </div>
    </div>
  );
}
