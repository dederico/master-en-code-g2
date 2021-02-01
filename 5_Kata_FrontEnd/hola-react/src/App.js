import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

class App extends React.Component {
  /* 
  
{
  "mali":"nali",
  "age":"22"
}
  */
  // constructor(props) {
  //   super(props);

  // }
  render() {

    // class -> HTMLElement className -> VirtualDom
    return (
      <div className="App" style={{ textAlign: "center" }
      }>
        <header className="App-header" style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "calc(10px + 2vmin)",
          color: "white"
        }}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola <code> DEV.F</code> esta pagina esta creada con React.
         </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce mas.
         </a>
          <Counter title="El 1er Contador" init="0" />
          <Counter init="10" />
        </header>
      </div >
    );

  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hola <code> DEV.F</code> esta pagina esta creada con React.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Conoce mas.
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
