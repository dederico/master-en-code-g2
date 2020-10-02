class HashTable {
  constructor(bucketSize = 1024) {
    this.bucketSize = bucketSize;
    this.data = new Array(bucketSize);
  }
  // key va a ser igual a mi elemento que voy a utilizar el hash key
  hashKey(key) {
    const h = JSON.stringify(key, Object.keys(key).sort())
      .split("")
      .reduce(
        (acumulador, actual, i) => acumulador + actual.charCodeAt(0) * (i + 1),
        0
      );
    return h % this.bucketSize; // posicion en la que se va a guardar nuestro elemento
  }
  set(key, value) {
    const hashkey = this.hashkey(key);
    const bucket = this.data[hashkey]; // 0 al 1023

    if (Array.isArray(bucket)) {
      // lo primero es verificar si la llave ya esta guardada
      // [[key,value],[[key,value],[[key,value],[[key,value]]
      // opcion conocida y la opcion a investigar
      let exist = -1;
      let i = 0;
      while (i < bucket.length && exist === -1) {
        // bucket[i]; [key,value]
        // bucket[i][0]; key
        // bucket[i][i]; value
        if (bucket[i][0] === key) {
          exist = i;
        }
        i++;
        if (exist > -1) {
          // si ya existe el elemento
          bucket[exist][1] = value;
        } else {
          bucket.push([key, value]);
        }
      }
    }
    this.data[hashkey] = [[key, value]];
  }
  get(key) {
    const bucket = this.data[this.hashKey(key)];
    if (Array.isArray(bucket)) {
      let i = 0;
      while (i < bucket.lenght && exist === -1) {
        if (bucket[i][0] === key) {
          exist = i;
        }
        i++;
      }
      return exist > -1 ? bucket[exist][1] : null;
    }
  }
}

const hash_m = new HashTable();
hash_m.set({ x: 10 * 5 }, 1);
hash_m.set({ x: 2 * 5 }, 2);
hash_m.set({ x: 20 * 5 }, 3);
hash_m.set({ x: 10 * 5 }, 1);
