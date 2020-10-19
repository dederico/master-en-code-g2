// 3. - Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos.Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino.Muestre el camino recorrido tanto de ida como de vuelta.

//     Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

// origen --> pueblos --> destino
// destino --> pueblos --> origen

camino = ([origen], [pueblo], [destino]) => {
  console.log(
    "El camino del conductor tuvo como origen " +
      origen +
      " paso por el pueblo " +
      pueblo +
      " y su destino final fue " +
      destino
  );
  resultado = Array.from(camino);
  return resultado;
  //   const caminoArray = Array.of(camino);
  //   console.log(caminoArray);
  //   const joinedArray = origen.concat(pueblo);
  //   console.log(joinedArray);
  //   const joinedArray2 = joinedArray.concat(destino);
  //   console.log(joinedArray2);
  //   const newArray = Array.from(joinedArray2);
  //   console.log(newArray);
  //   console.log(newArray.reverse());
  //   const newJoinedArray = newArray.join();
  //   console.log(Array.from(newJoinedArray));
};
camino(["Puebla"], ["San Luis"], ["Mexico"]);
