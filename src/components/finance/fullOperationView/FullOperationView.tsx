import React from 'react';
import styles from './fullOperationView.module.scss';

export interface FullOperationViewProps {
  sum: number;
  category: string;
  name: string;
  date: string;
  desc: string;
}

const FullOperationView: React.FC<FullOperationViewProps> = ({ sum, category, name, desc, date }) => {
  return (
    <div className={styles.operationItem}>
      <span className={styles.property}>
        <p className={styles.name}>Дата</p>
        <p className={styles.value}>{date}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Наименование</p>
        <p className={styles.value}>{name}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Сумма</p>
        <p className={styles.value}>{sum}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Категория</p>
        <p className={styles.value}>{category}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Описание</p>
        <p className={styles.value}>{desc}</p>
      </span>
      <button>Редактировать</button>
    </div>
  );
};

export default FullOperationView;
