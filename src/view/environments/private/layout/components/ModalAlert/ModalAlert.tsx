import { Alert, Modal } from 'antd';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ModalAlertProps {
  className?: string;
  alertType?: 'info' | 'success' | 'error' | 'warning' | undefined;
  text?: string;
  condition: boolean;
}

export const ModalAlert = ({ className, alertType, text, condition }: ModalAlertProps) => {
  const [open, setOpen] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const hideModal = () => {
    setOpen(false);
    setSearchParams({});
  };

  if (!condition || searchParams.size === 0) {
    return null;
  }

  return (
    <Modal open={open} onOk={hideModal} cancelButtonProps={{ style: { display: 'none' } }}>
      <Alert className={className} message={text} type={alertType} />
    </Modal>
  );
};
