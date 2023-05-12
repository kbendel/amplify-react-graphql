import React from 'react';
import Shakopee_Old_Map from './Shakopee_Old_Map.jpg';
import './App.css';
import Game from './TicTacToe.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe 3 in a row</h1>
      </header>
      <div class="col-12">
                      <Game/>
      </div>
    </div>
  );
}

export default App;
