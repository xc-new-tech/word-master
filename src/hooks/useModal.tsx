import { useState, useCallback } from 'react';
import Modal, { ModalProps } from '@/components/Modal';

interface ModalState {
  show: boolean;
  title: string;
  message: string;
  type: ModalProps['type'];
  confirmText?: string;
  cancelText?: string;
  onConfirmCallback?: () => void;
}

export function useModal() {
  const [modal, setModal] = useState<ModalState>({
    show: false,
    title: '',
    message: '',
    type: 'info',
  });

  const showModal = useCallback((
    title: string,
    message: string,
    onConfirmCallback?: () => void,
    options?: {
      type?: ModalProps['type'];
      confirmText?: string;
      cancelText?: string;
    }
  ) => {
    setModal({
      show: true,
      title,
      message,
      type: options?.type || 'info',
      confirmText: options?.confirmText,
      cancelText: options?.cancelText,
      onConfirmCallback,
    });
  }, []);

  const hideModal = useCallback(() => {
    setModal(prev => ({ ...prev, show: false }));
  }, []);

  const handleConfirm = useCallback(() => {
    if (modal.onConfirmCallback) {
      modal.onConfirmCallback();
    }
    hideModal();
  }, [modal.onConfirmCallback, hideModal]);

  const ModalComponent = modal.show ? (
    <Modal
      title={modal.title}
      message={modal.message}
      type={modal.type}
      confirmText={modal.confirmText}
      cancelText={modal.cancelText}
      onConfirm={handleConfirm}
      onCancel={hideModal}
    />
  ) : null;

  return {
    confirm: useCallback(
      (title: string, message: string, onConfirm?: () => void) =>
        showModal(title, message, onConfirm, { type: 'info' }),
      [showModal]
    ),
    warning: useCallback(
      (title: string, message: string, onConfirm?: () => void) =>
        showModal(title, message, onConfirm, { type: 'warning' }),
      [showModal]
    ),
    danger: useCallback(
      (title: string, message: string, onConfirm?: () => void) =>
        showModal(title, message, onConfirm, { type: 'danger' }),
      [showModal]
    ),
    ModalComponent,
  };
}
