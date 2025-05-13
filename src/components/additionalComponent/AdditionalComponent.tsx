import React, { useState } from 'react';
import styles from './additionalComponent.module.scss';
import Modal from '../modal/Modal';
import { Button } from '../button/Button';

const AdditionalComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleMessageChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(value?.target?.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.content}>
        <input value={message} onChange={handleMessageChange} />
        <Button onClick={handleOpenModal} label={isModalOpen ? 'Скрыть' : 'Отобразить'} />
      </div>
      <Modal visible={isModalOpen} onClose={() => handleCloseModal()}>
        <div>{message}</div>
      </Modal>
    </>
  );
};

export default AdditionalComponent;
