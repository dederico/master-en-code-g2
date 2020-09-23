// El nodo es la informacion del elemento y su apuntador(o enlace) al siguiente elemento.
class Node {
  constructor(data) {
    // en data guardamos cualquier objeto que queramos
    this.data = data;
    // es quien nos indica el siguiente nodo, por defecto este es nulo.
    this.next = null;
  }
}
// Estructura de datos
// Una manera de trabajar con los datos

// Linked List
// una lista ligada debe tener una cabecera (HEAD)
// Nos va a indicar el inicio de la lista.

// El tamano de la lista (length) (tambien se va a guardar)

// Las listas tienen 2 comportamientos escenciales,
// insertar (add)
// borrar (delete)
class LinkedList {
  // estas son las propiedades de mi lista
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // estos son los metodos o comportamientos de mi lista
  add(data) {
    const node = new Node(data); // {data: data, next:null}
    this.head = node;
    this.length++;
  }
}
