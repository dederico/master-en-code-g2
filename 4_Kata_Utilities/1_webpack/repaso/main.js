const Gato = require("./clases/Gato");
const Camaleon = require("./clases/Camalon");

console.log("Soy yo");

const gato = new Gato("Garfield", 4, "Verdes");
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());
// gato.setColor("rojo");

console.log("-------------------------------");

const camaleon = new Camaleon("Rango", 4);
console.log(camaleon);
console.log(camaleon.comer());
camaleon.setColor("rojo");
console.log(camaleon);
