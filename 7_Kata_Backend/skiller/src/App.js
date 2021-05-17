import logo from './logo.svg';
import './App.css';
import '../routes'
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { errors } = require('celebrate');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
body
{
    "nombre":"Federico",
    "ocupacion":"Estudiante",
}
*/
// const { showTime } = require('./middlewares');
// const { verifyToken } = require('./middlewares');

// despues de la ruta agregamos el metodo

app.get('/', (req, res) => res.status(200).json({ message: "hola mundo" }));

app.use('/api/v1', require('./routers'));
app.use(errors());
console.log('Entorno', process.env.NODE_ENV);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  );
}

export default App;
