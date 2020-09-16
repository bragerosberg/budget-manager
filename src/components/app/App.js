import React from 'react';
import Board from '../board/Board';
import './app.css';

function App() {
  return (
    <main>
      <header className="app__header">
        <Board />
      </header>
    </main>
  );
}

export default App;
