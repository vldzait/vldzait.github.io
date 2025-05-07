import React from 'react';
import styles from './shortOperationView.module.scss';
import { Operation } from 'src/types/Operation.type';

const ShortOperationView: React.FC<Operation> = ({ amount, category, name, desc }) => {
  return (
    <div className={styles.operationItem}>
      <img className={styles.photo} src={category?.photo} />
      <span className={styles.property}>
        <p className={styles.name}>Наименование</p>
        <p className={styles.value}>{name}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Сумма</p>
        <p className={styles.value}>{amount}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Категория</p>
        <p className={styles.value}>{category?.name}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Описание</p>
        <p className={styles.value + ' ' + styles.valueEllipsis}>{desc}</p>
      </span>
    </div>
  );
};

export default ShortOperationView;
