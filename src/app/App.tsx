import React from 'react';
import './App.css';
import Layout from 'src/components/layout/Layout';
import ThemeProvider from 'src/components/themeProvider/ThemeProvider';
import ProductList from 'src/components/shop/productList/ProductList';

function App() {
  return (
    <ThemeProvider>
      <Layout />
      <ProductList products={[]} />
    </ThemeProvider>
  );
}

export default App;
