import React, { useContext } from 'react';
import { ThemeContext } from '../themeProvider/ThemeProvider';
import styles from './themeChanger.module.scss';
import { useTranslation } from 'react-i18next';

const ThemeChanger: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return <button onClick={toggleTheme}>{t('switchThemeBtn')}</button>;
};

export default ThemeChanger;
