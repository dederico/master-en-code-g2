// 2. - Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number,
// y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila,
// sea reemplazado por el primero(Solo la primera vez), y hará pop de los elementos más nuevos.

// Entrada: reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2)
// Salida: [3, 2, 3, 4, 6, 8, 1, 7]

reemplazar = (pila, nuevo, viejo) => {
  for (let index = 0; index < pila.length; index++) {
    console.log(viejo);
    const element = pila[index];
    console.log(element + " primer clg");
    if (pila.includes(viejo)) {
      const repetido = pila.includes(viejo);
      console.log("Si esta incluido");
      while (viejo === element) {
        let repetidos = Array.of(element);
        console.log(repetidos);
      }
      //   if (viejo === element) {
      //     for (let index1 = 1; index1 < element.length; index1++) {
      //       console.log(viejo + "el ultimo parametro");
      //       console.log(pila[index1] + "elemento");
      //     }
      //   } else {
      //     console.log("No esta repetido");
      //   }
    }
  }
};
reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2);
