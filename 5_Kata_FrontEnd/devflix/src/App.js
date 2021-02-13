import logo from './assets/1x/movie.png';
import NavbarComponent from './components/NavbarComponent'

import './App.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <input
            className="input-landing"
            placeholder="What are you looking for?"
          >
          </input>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </>
  );
}

export default App;
