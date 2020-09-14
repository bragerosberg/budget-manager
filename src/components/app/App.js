import React from 'react';
import Board from '../board/Board';
import './app.css';

function App() {
  return (
    <main className="app__wrapper">
      <header className="app__header">
        <Board />
      </header>
    </main>
  );
}

export default App;
