import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Название: Зайцев Вова</p>
        <p>Cтек: React(Next) + Node(express) + MySql/Postrgres</p>
        <p>Цель: структурировать и укрепить старые знания + подчерпнуть для себя что-то новое</p>
        <p>О себе: тружусь программистом уже около 6 лет.</p>
      </header>
    </div>
  );
}

export default App;
