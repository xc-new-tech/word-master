import { useEffect } from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose: () => void;
}

export default function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-success/90 text-white';
      case 'error':
        return 'bg-error/90 text-white';
      case 'warning':
        return 'bg-warning/90 text-white';
      case 'info':
      default:
        return 'bg-primary/90 text-white';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'check_circle';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info':
      default:
        return 'info';
    }
  };

  return (
    <div
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2 duration-300"
      style={{ maxWidth: 'calc(100vw - 2rem)' }}
    >
      <div
        className={`flex items-center gap-3 rounded-lg px-4 py-3 shadow-2xl ${getTypeStyles()} min-w-[280px] max-w-md`}
      >
        <span className="material-symbols-outlined text-2xl flex-shrink-0">
          {getIcon()}
        </span>
        <p className="text-sm font-medium font-chinese flex-1">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>
    </div>
  );
}
