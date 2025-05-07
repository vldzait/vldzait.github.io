import React, { KeyboardEvent, ReactNode, useEffect } from 'react';
import styles from './modal.module.scss';
import { createPortal } from 'react-dom';

export interface ModalProps {
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
}

const modalRoot = document.getElementById('modal-root') || document.body;

const Modal: React.FC<ModalProps> = ({ visible, children, onClose }) => {
  const handleKeyDown = (ev: globalThis.KeyboardEvent) => {
    if (ev.key === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    visible &&
    createPortal(
      <div className={styles.mask} onClick={onClose}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.button} onClick={onClose}>
              X
            </button>
          </div>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>,
      modalRoot
    )
  );
};

export default Modal;
