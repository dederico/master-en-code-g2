// import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo App
         <HolaMundo texto="Hola desde App.js" />
      </header>
    </div>
  );
}

export default App;
