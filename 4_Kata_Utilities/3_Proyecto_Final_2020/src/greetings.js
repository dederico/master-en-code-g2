const greeting = (name) => `Hola ${name}, bienvenido al ECMA6`;

// Forma que lee Babel o ECMA2015, o ECMA6
export default greeting;

// Forma que lee node
/*
module.exports = {
  message: "Hola",
  greeting,
};
*/

/*
const valorObtenidoDelArchivo = require("ruta/del/archivo");
valorObtenidoDelArchivo.message; // "Hola"
valorObtenidoDelArchivo.greeting; // (name) => `Hola ${name}, bienvenido al ECMA6`
*/

// CommonJS
