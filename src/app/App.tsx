import React from 'react';
import './App.css';
import Layout from 'src/components/layout/Layout';
import ThemeProvider from 'src/components/themeProvider/ThemeProvider';
import i18next from 'i18next';

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
