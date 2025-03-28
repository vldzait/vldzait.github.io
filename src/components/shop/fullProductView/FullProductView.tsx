import React from 'react';
import styles from './fullProductView.module.scss';
import BasketBtn from '../basketBtn/BasketBtn';

export interface FullProductViewProps {
  price: number;
  photo: string;
  category: string;
  name: string;
  desc: string;
}

const FullProductViewProps: React.FC<FullProductViewProps> = ({ price, photo, category, name, desc }) => {
  return (
    <div className={styles.operationItem}>
      <span className={styles.property}>
        <p className={styles.name}>Фото</p>
        <p className={styles.value}>{photo}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Наименование</p>
        <p className={styles.value}>{name}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Сумма</p>
        <p className={styles.value}>{price}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Категория</p>
        <p className={styles.value}>{category}</p>
      </span>
      <span className={styles.property}>
        <p className={styles.name}>Описание</p>
        <p className={styles.value}>{desc}</p>
      </span>
      <BasketBtn count={0} />
    </div>
  );
};

export default FullProductViewProps;
