interface CircularProgressProps {
  value: number; // 0-100
  max: number;
  size?: number;
  strokeWidth?: number;
}

export default function CircularProgress({
  value,
  max,
  size = 96,
  strokeWidth = 3,
}: CircularProgressProps) {
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;
  const strokeDasharray = `${(percentage / 100) * circumference}, ${circumference}`;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox="0 0 36 36">
        {/* Background circle */}
        <path
          className="text-border-light dark:text-border-dark"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <path
          className="text-success"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-text-light dark:text-text-dark">
          {value}/{max}
        </span>
      </div>
    </div>
  );
}
