// Pure function
// Carece de efectos secundarios

const sumaUnoAlNumero = (numero) => numero + 1;
// console.log(sumaUnoAlNumero(7));

// Avoid side effects / Esta funcion tiene un efecto secundario.
const sumaNumeroRandom = (numero) => numero + Math.random();
// console.log(sumaNumeroRandom(7));

var temperatura = 18;
const dimeTemperatura = () => `La temperatura es ${temperatura}`;
// console.log(dimeTemperatura());
// evitar variables globales en mis funciones

// Function composition
const realizaOperacion = (a, b, callback) => callback(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

// console.log(realizaOperacion(5, 3, suma));
// console.log(realizaOperacion(9, 5, resta));
// console.log(realizaOperacion(5, 5, mult));
// console.log(realizaOperacion(5, 5, div));

// Avoid mutating state
const sensei = Object.freeze({
  nombre: "Gera",
  programa: "Master en Coding",
  equipo: Object.freeze({
    modelo: "ASUS",
    ram: 12,
  }),
});
sensei.nombre = "Mali";
sensei.programa = " Cinta Roja";
sensei.equipo.modelo = "MacBook";
console.log(sensei);

// Subir suledo con Programacion Orientada a Objetos
class Empleado {
  constructor(nomnbre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }
  cambiarSalario(aumento) {
    this.salario = salario + aumento;
  }
  descripcion() {
    return `El trabajador, ... `;
  }
}
const empleados = [
  ["Luis Torres", 25000],
  ["Maria Arriaga", 42000],
];

const copiaEmpleados = (empleados) => {
  let newEmpleados = new Array();
  empleados.forEach((empleado) => newEmpleados.push([...empleado]));
  return newEmpleados;
};
console.log(copiaEmpleados(empleados));

const cambiarSalario = (empleados, cantidad) => {
  let copEmpleados = copiaEmpleados(empleados);
  copEmpleados.forEach((empleado) => {
    empleado[1] = empleado[1] + cantidad;
  });
  return copEmpleados;
};
console.log(cambiarSalario(empleados, 10000));

const empleadosFelices = cambiarSalario(empleados, 10000);
//console.log(empleadosFelices);

// ---------------------------------------
// Metodos de los Arrays
//                0          1               2           3          4

// FOR EACH
const paises = ["Mexico", "Costa Rica", "Colombia", "El Salvador", "Peru"];
let x = paises.forEach((pais, index, array) => {
  //console.log("Elemento actual -> " + pais);
  //console.log("Indice -> " + index);
  //console.log(array);
  return pais; // devuelve undefined
});

// MAP
// map -> devuelve un arreglo
const numbers = [1, 5, 10, 15];
const doubles = numbers.map((number, index, array) => number * 2);
// console.log(doubles);

// FILTER
// .filter() devuelve un arreglo con los elementos que cumplen la condicion dada de retorno
const paisesFiltrados = paises.filter((pais, index, array) => pais.length > 6);
console.log(paisesFiltrados);

// SORT
const frutas = ["manzana", "pera", "kiwi", "banana"];
frutasOrdenadas = frutas.sort();
// como ordenamos numeros????

console.log(frutasOrdenadas);

// REDUCE
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer, 5));

const sumatoria = numbers.reduce((a, b) => a + b, 5);
console.log(sumatoria);
