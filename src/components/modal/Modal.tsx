import React, { ReactNode } from 'react';
import styles from './modal.module.scss';

export interface ModalProps {
  visible: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  if (visible === false) {
    return null;
  }
  return (
    <>
      <div className={styles.mask}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.button}>X</button>
          </div>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
