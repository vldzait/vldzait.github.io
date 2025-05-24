import React from 'react';
import styles from './basketItem.module.scss';
import { Button } from '../../button/Button';

export interface BasketItemProps {
  sum: number;
  category: string;
  name: string;
  date: string;
  desc: string;
}

const BasketItem: React.FC<BasketItemProps> = ({ sum, category, name, desc, date }) => {
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
      <Button label={`Удалить`} />
    </div>
  );
};

export default BasketItem;
