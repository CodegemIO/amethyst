import React from 'react';
import Modal from '../Modal';

interface Props {
  open: boolean;
  onClose(): void;
  onConfirm(): void;
  onCancel(): void;
  title?: string;
  message?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  confirmLoading?: boolean;
  cancelLoading?: boolean;
  confirmColor?: 'default' | 'primary' | 'error';
  cancelColor?: 'default' | 'primary' | 'error';
}

const ConfirmModal: React.FC<Props> = ({
  open,
  onClose,
  onConfirm,
  onCancel,
  title = 'Are you sure?',
  message = 'This action cannot be undone.',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmLoading = false,
  cancelLoading = false,
  confirmColor = 'error',
  cancelColor = 'default',
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      actions={[
        {
          title: cancelText,
          color: cancelColor,
          onClick: onCancel,
          loading: cancelLoading,
        },
        {
          title: confirmText,
          color: confirmColor,
          onClick: onConfirm,
          loading: confirmLoading,
        },
      ]}
      containerStyle={{
        minHeight: 0,
        maxWidth: '30rem',
      }}
    >
      <span>{message}</span>
    </Modal>
  );
};

export default ConfirmModal;
