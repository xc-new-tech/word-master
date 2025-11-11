export interface ModalProps {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  type?: 'info' | 'warning' | 'danger';
}

export default function Modal({
  title,
  message,
  confirmText = '确定',
  cancelText = '取消',
  onConfirm,
  onCancel,
  type = 'info',
}: ModalProps) {
  const getConfirmButtonStyles = () => {
    switch (type) {
      case 'danger':
        return 'bg-error hover:bg-error/90 text-white';
      case 'warning':
        return 'bg-warning hover:bg-warning/90 text-white';
      case 'info':
      default:
        return 'bg-primary hover:bg-primary/90 text-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 animate-in fade-in duration-200"
        onClick={onCancel}
      />

      {/* Modal Content */}
      <div className="relative bg-card-light dark:bg-card-dark rounded-2xl shadow-2xl max-w-sm w-full animate-in zoom-in-95 fade-in duration-200">
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3 font-chinese">
            {title}
          </h3>

          {/* Message */}
          <p className="text-subtext-light dark:text-subtext-dark text-base leading-relaxed font-chinese mb-6">
            {message}
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 h-11 rounded-lg border-2 border-border-light dark:border-border-dark text-text-light dark:text-text-dark font-medium hover:bg-background-light dark:hover:bg-background-dark transition-colors font-chinese"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 h-11 rounded-lg font-medium transition-colors font-chinese ${getConfirmButtonStyles()}`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
