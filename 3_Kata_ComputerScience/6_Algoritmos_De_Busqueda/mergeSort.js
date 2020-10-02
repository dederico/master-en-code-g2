/*
Entradas:
1) Arreglo desordenado

Salidas:
2) Arreglo ordenado (de menor a mayor)

*/

const mergeSort = (unorderedArray) => {
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
};

const merge = (orderedLeft, orderedRight) => {};
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
