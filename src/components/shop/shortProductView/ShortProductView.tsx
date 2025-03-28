import React from 'react';
import styles from './shortProductView.module.scss';
import BasketBtn from '../basketBtn/BasketBtn';

export interface ShortProductViewProps {
  price: number;
  photo: string;
  name: string;
  desc: string;
}

const ShortProductView: React.FC<ShortProductViewProps> = ({ price, photo, name, desc }) => {
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
        <p className={styles.name}>Описание</p>
        <p className={styles.value + ' ' + styles.valueEllipsis}>{desc}</p>
      </span>
      <BasketBtn count={0} />
    </div>
  );
};

export default ShortProductView;
