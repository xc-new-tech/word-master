import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  title: string;
  showBack?: boolean;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
}

export default function TopBar({
  title,
  showBack = true,
  rightIcon,
  onRightIconClick,
}: TopBarProps) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 flex h-16 items-center justify-between bg-background-light/80 px-4 backdrop-blur-sm dark:bg-background-dark/80 border-b border-border-light dark:border-border-dark">
      <div className="flex size-10 shrink-0 items-center justify-center">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
        )}
      </div>

      <h1 className="flex-1 text-center text-lg font-bold text-text-light dark:text-text-dark">
        {title}
      </h1>

      <div className="flex size-10 shrink-0 items-center justify-center">
        {rightIcon && (
          <button
            onClick={onRightIconClick}
            className="flex size-10 items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors"
          >
            {rightIcon}
          </button>
        )}
      </div>
    </div>
  );
}
