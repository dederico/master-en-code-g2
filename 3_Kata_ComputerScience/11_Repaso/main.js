// alert("Hola G2");

//Async

/*
El FOR representa un cuello de botella por ser sincrono
*/

// const miFuncion = () => {
//   return "Hola soy la funcion";
// };

// 10000;
// console.log(1);
// console.log(2);
/* 
for (let i = 0; i < 10000; i++) {
  console.log("For en el indice: ", i);
}
*/

// console.log(miFuncion());
/*
Las cosas asincronas nos permiten evitar cuellos de botella
*/

/* 
setTimeout(() => {
  console.log(3);
}, 1000);
console.log(4);
console.log(5);
*/

/*
Como funciona la cola de callbacks
*/

const despuesDeMil = () => {
  console.log("Primer timeout!");
};

const despuesDeQuinientos = () => {
  console.log("Segundo timeout!");
};

const despuesDeDoscientos = () => {
  console.log("Tercer timeout");
};

console.log("Inicio");
setTimeout(despuesDeMil, 1000);
setTimeout(despuesDeQuinientos, 500);
setTimeout(despuesDeDoscientos, 200);
setTimeout(() => {
  console.log("Ya!");
}, 0);
console.log("Fin");

/*
CALLBACKS & Higher Order Functions
*/
// setTimeout recibe:
// 1) un callback
// 2) tiempo que debe esperar antes de ejecutar el callback

// setTimeut es una funcion de orden superior
// porque recibe un callback como argumento

// Un callback es la función cuando la mandas como parámetro.

setTimeout(() => {}, 2000);

/*
Caso didactico y cero practico
*/

const texto = "texto";
const booleano = true;
const miOtraFuncion = () => {};

const ejecutaOperacionConDosNumeros = (num1, num2, operacion) => {
  return operacion(num1, num2);
};
const sumarDosNumeros = (a, b) => a + b;

const resultado = ejecutaOperacionConDosNumeros(5, 7, sumarDosNumeros);
console.log(resultado);
