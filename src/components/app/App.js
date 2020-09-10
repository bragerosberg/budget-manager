import React from 'react';
import Budget from '../budget/Budget';
import './app.css';

function App() {
  return (
    <main className="app__wrapper">
      <header className="app__header">
        <Budget />
      </header>
    </main>
  );
}

export default App;
