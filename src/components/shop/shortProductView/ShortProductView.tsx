import React from 'react';
import styles from './shortProductView.module.scss';
import BasketBtn from '../basketBtn/BasketBtn';
import { Product } from 'src/types/Product.type';

const ShortProductView: React.FC<Product> = ({ price, photo, name, desc }) => {
  return (
    <div className={styles.operationItem}>
      <img className={styles.photo} src={photo} />
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.property}>
        <p className={styles.label}>Цена</p>
        <p className={styles.value}>{price} руб.</p>
      </span>
      <BasketBtn count={0} />
    </div>
  );
};

export default ShortProductView;
