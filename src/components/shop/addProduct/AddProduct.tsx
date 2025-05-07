import React, { FC } from 'react';
import styles from './addProduct.module.scss';

export interface AddProductProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  label: string;
  onClick: () => void;
}

const AddProduct: FC<AddProductProps> = ({ onClick, primary, backgroundColor, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={styles.storybookButton}
      style={{ backgroundColor: backgroundColor || 'green' }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default AddProduct;
