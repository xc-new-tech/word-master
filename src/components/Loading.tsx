interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
  text?: string;
}

export default function Loading({
  size = 'medium',
  fullScreen = false,
  text
}: LoadingProps) {
  const sizeMap = {
    small: 'h-6 w-6 border-2',
    medium: 'h-12 w-12 border-4',
    large: 'h-16 w-16 border-4',
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`
          animate-spin rounded-full border-primary/20 border-t-primary
          ${sizeMap[size]}
        `}
        role="status"
        aria-label="加载中"
      />
      {text && (
        <p className="text-sm text-subtext-light dark:text-subtext-dark font-chinese">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background-light dark:bg-background-dark z-50">
        {content}
      </div>
    );
  }

  return content;
}
