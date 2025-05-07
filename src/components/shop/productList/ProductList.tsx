import React, { useEffect, useRef, useState } from 'react';
import styles from './productList.module.scss';
import { Product } from 'src/types/Product.type';
import ShortProductView from '../shortProductView/ShortProductView';
import { createRandomProduct } from '../../../services/service';
import AddProduct from '../addProduct/AddProduct';

export type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [productsArr, setProductsArr] = useState(products);
  const targetElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const newProduct: Product[] = [];
          for (let i = 0; i <= 6; i++) {
            newProduct.push(createRandomProduct());
          }
          setProductsArr((prev) => [...prev, ...newProduct]);
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );
    intersectionObserver.observe(targetElement.current);

    return () => intersectionObserver.unobserve(targetElement.current);
  }, []);

  const handleAddProduct = () => {
    const newProduct = createRandomProduct();
    setProductsArr((prev) => [...prev, newProduct]);
  };

  return (
    <>
      <div className={styles.list}>
        {productsArr?.map((product: Product, productIndex: number) => {
          return <ShortProductView key={'operationItem_' + productIndex} {...product} />;
        })}
        <div ref={targetElement}></div>
      </div>
      <AddProduct label={'Показать еще'} onClick={handleAddProduct} />
    </>
  );
};

export default ProductList;
