import React from 'react';
import styles from './shortOperationView.module.scss';

export interface ShortOperationViewProps {
  sum: number;
  category: string;
  name: string;
  desc: string;
}

const ShortOperationView: React.FC<ShortOperationViewProps> = ({ sum, category, name, desc }) => {
  return (
    <div className={styles.operationItem}>
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
        <p className={styles.value + ' ' + styles.valueEllipsis}>{desc}</p>
      </span>
    </div>
  );
};

export default ShortOperationView;
