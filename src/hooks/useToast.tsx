import { useState, useCallback } from 'react';
import Toast, { ToastProps } from '@/components/Toast';

type ToastType = ToastProps['type'];

interface ToastState {
  show: boolean;
  message: string;
  type: ToastType;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'info',
  });

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    setToast({ show: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, show: false }));
  }, []);

  const ToastComponent = toast.show ? (
    <Toast
      message={toast.message}
      type={toast.type}
      onClose={hideToast}
    />
  ) : null;

  return {
    success: useCallback((message: string) => showToast(message, 'success'), [showToast]),
    error: useCallback((message: string) => showToast(message, 'error'), [showToast]),
    warning: useCallback((message: string) => showToast(message, 'warning'), [showToast]),
    info: useCallback((message: string) => showToast(message, 'info'), [showToast]),
    ToastComponent,
  };
}
