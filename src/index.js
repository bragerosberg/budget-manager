import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/board/Board';

ReactDOM.render(
  <React.StrictMode>
    <main className="app__header">
      <Board />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

