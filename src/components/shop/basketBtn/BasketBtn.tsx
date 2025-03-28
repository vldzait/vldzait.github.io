import React, { ReactNode } from 'react';
import styles from './basketBtn.module.scss';

export interface BasketBtnProps {
  count: number;
}

const BasketBtn: React.FC<BasketBtnProps> = ({ count }) => {
  if (count > 0) {
    return (
      <div>
        <button>-</button>
        <input type="text" value={count} />
        <button>+</button>
      </div>
    );
  } else {
    return <button>В корзину</button>;
  }
};

export default BasketBtn;
