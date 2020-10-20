// Pilas / Colas ejercicios

// 1. - Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número(segundo parámetro).

//     Entrada : mifuncion([‘Manzana’, ‘Cebolla’, ‘Apio’, ‘Naranja’, ‘Papaya’, ‘Sandía’, ‘Melón’],
//         Salida: [‘Manzana’, ‘Cebolla’, ‘Apio’, ‘Naranja’]

// const perro = [
//   "Manzana",
//   "Cebolla",
//   "Apio",
//   "Naranja",
//   "Papaya",
//   "Sandia",
//   "Melon",
// ];
// const num = perro.length;

miFuncion = (pila, num) => {
  console.log(num);
  console.log(pila.length);
  if (num <= pila.length) {
    for (let index = 0; index < num; index++) {
      const element = pila[index];
      console.log(element + " cool");
    }
  } else {
    console.log("not cool");
  }
};
miFuncion(["gordo", "panzon", "gato"], 3);
miFuncion(
  ["Susana", "Fernando", "Francisco", "Juan", "Gabriel", "Federico"],
  9
);
miFuncion(
  ["manzana", "cebolla", "apio", "naranja", "papya", "sandia", "melon"],
  4
);
