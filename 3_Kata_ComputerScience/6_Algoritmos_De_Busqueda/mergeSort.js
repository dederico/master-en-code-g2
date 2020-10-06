/*
Entradas:
1) Arreglo desordenado

Salidas:
2) Arreglo ordenado (de menor a mayor)

*/

// const mergeSort = (unorderedArray) => {
/*
    si el arregloDesordenado tiene 0 o 1 elementos,
    retorno el arreglo, pues ya esta ordenado.

    obtenemos el tamano del arreglo
    size = unorderedArray.length

    obtenemos el punto medio del arreglo 
    middle = truncarHaciaAbajo(size/2)

    Dividimos el arreglo en mitades a partir de un punto medio
    left= unorderedArray.slice(0,middle);
    right= unorderedArray.slice(middle, size);

    dividimos los arreglos RECURSIVAMENTE, hasta obtener la unidad
    o un arreglo ordenado

    orderedLeft = mergeSort(left);
    orderedRight= mergeSort(right);

    Conquistamos mezclando los arreglos ordenados (orderedLeft y orderedRight)
    orderedArray = merge(orderedLeft,orderedRight);
     */
// };

// const merge = (orderedLeft, orderedRight) => {};
/*
Necesitamos saber donde estamos posicionados en el arreglo izquierdo
indexLeft, 
Necesitamos saber donde estamos posicionados en el arreglo derecho
indexRight,
Necesitamos un arreglo auxiliar donde estaremos insertando el nuevo orden
auxArray;

Mientras (indexLeft < orderedLeft.length && indexRight < orderedRight.length)
if (orderedLeft[indexLeft] < orderedRight[indexRight])
auxArray.push(orderedLeft[indexLeft])
leftIndex++
else
auxArray.push(orderedRight[indexRight])
rightIndex++

Necesitamos antes de devolver la mezcla (merge), debemos concatenar los posibles excedentes (arreglados)
resultArray = auxArray
.concat(orderedLeft.slice(indexLeft)
.concat(orderedRight.slice(indexRight));

Retornamos orderedArray
 */
function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // Hallamos el tamaño del arreglo
  const size = unsortedArray.length;

  // Hallamos la mitad del arreglo
  const middle = Math.floor(size / 2);

  // Obtenemos las mitades
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Dividimos hasta llegar a uno o tener un arreglo ordenado
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Vencemos, ordenando y mezclando ambos arreglos de 1 o arreglos previamente ordenados
  return merge(sortedLeft, sortedRight);
}

// Mezclamos ambos arreglos, izquierdo y derecho
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // Agregamos los valores de cada arreglo dentro de "resultArray" en orden
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // movemos hacia adelante el indice izquierdo
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // movemos hacia adelante el indice derecho
    }
  }

  // Concatenamos los excedentes. Si concatenamos arreglos vacíos, no se verán reflejados los vacíos
  const finalArray = resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));

  return finalArray;
}

const result = mergeSort([
  1,
  28,
  3.1416,
  37,
  56,
  0,
  99,
  7,
  13,
  190,
  52,
  77,
  1,
  83,
  82,
  11,
  0,
  507,
  13,
  360,
  74,
  68,
  784,
]);

console.log(result);
