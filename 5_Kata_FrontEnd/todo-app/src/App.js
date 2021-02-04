// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Todos from './components/Todos'


function App() {
  return (
    <>
      <Navbar />
      <div className="App">

        <header className="App-header">

          <Todos />

        </header>

      </div>
    </>
  );


}

export default App;


