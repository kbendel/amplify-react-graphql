import React from 'react';
import Shakopee_Old_Map from './Shakopee_Old_Map.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Shakopee_Old_Map} className="App-logo" alt="logo" />
        <marquee><h1>Hello from Savage, MN!</h1></marquee>
      </header>
    </div>
  );
}

export default App;
