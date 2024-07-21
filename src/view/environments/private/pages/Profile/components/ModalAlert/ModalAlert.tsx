import { Alert, Modal } from 'antd';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ModalAlert {
  className?: string;
  alertType?: 'info' | 'success' | 'error' | 'warning' | undefined;
  text?: string;
}

export const ModalAlert = ({ className, alertType, text }: ModalAlert) => {
  const [open, setOpen] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const hideModal = () => {
    setOpen(false);
    setSearchParams({});
  };
  return (
    <Modal open={open} onOk={hideModal} cancelButtonProps={{ style: { display: 'none' } }}>
      <Alert className={className} message={text} type={alertType} />
    </Modal>
  );
};
