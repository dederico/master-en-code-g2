// import logo from './logo.svg';
import './App.css';
import Content from './components/Content'
import React from 'react';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="App">

        <header className="App-header">

          Todo App
         <Content />

        </header>
      </div>
    </>
  );


}

export default App;



// return (
//   <main className="main">
//     <Navbar /> - Colocar una navbar sencilla
//     <Content /> - Una lista de contactos ( pueden colocar  los nombres y correos de tres personas)
//       -Tiene que ocupar todo el espacio disponible entre el navbar y el Footer
//       -Tiene que centrar el contenido horizontal y verticalmente
//     <Footer /> -Colocar un footer sencillo que siempre esté pegado al final de la página, independientemente del contenido
//   </main>
// )