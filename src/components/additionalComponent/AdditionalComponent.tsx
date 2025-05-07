import React, { useState } from 'react';
import styles from './additionalComponent.module.scss';
import Modal from '../modal/Modal';

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
        <button onClick={handleOpenModal}>{isModalOpen ? 'Скрыть' : 'Отобразить'}</button>
      </div>
      <Modal visible={isModalOpen} onClose={() => handleCloseModal()}>
        <div>{message}</div>
      </Modal>
    </>
  );
};

export default AdditionalComponent;
