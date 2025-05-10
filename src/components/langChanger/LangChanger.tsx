import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const LangChanger: React.FC = () => {
  const { t } = useTranslation();
  const toggleLang = () => {
    if (i18next.language === 'ru') {
      i18next.changeLanguage('en');
    } else {
      i18next.changeLanguage('ru');
    }
  };
  return <button onClick={toggleLang}>{t('switchLangBtn')}</button>;
};

export default LangChanger;
