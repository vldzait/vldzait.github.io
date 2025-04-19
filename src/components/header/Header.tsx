import React, { useContext } from 'react';
import styles from './header.module.scss';
import Logo from '../logo/Logo';
import ThemeChanger from '../themeChanger/ThemeChanger';
import { ThemeContext } from '../themeProvider/ThemeProvider';
import LangChanger from '../langChanger/LangChanger';

const Header = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <header className={styles.header + ' ' + styles[themeContext.theme]}>
      <Logo />
      <ThemeChanger />
      <LangChanger />
    </header>
  );
};

export default Header;
