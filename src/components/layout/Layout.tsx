import React from 'react';
import styles from './layout.module.scss';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
    </div>
  );
};

export default Layout;
