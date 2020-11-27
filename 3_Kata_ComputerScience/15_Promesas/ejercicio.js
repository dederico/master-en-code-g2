//     Escribe el código que permita hacer las operaciones elementales
//     CRUD de la siguiente API genérica:
//          https://goodreads-devf-aaron.herokuapp.com/docs/

//    Recuerda probar con Postman o con Insomnia cómo hay que hacer las peticiones a la API     para ver qué y cómo responde el servidor.
const request = require("request");

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com";

//     1.- Escribe una función que reciba como parámetros nombre,
//         nacionalidad, biografía, género y edad para hacer una
//         petición a la API para crear un autor nuevo.
//         La función debe retornar el autor nuevo en una promesa.
const createAuthor = (
  name,
  lastName,
  nacionalidad,
  biography,
  gender,
  age,
  isAlive
) => {
  const URL_POST = `${URL_BASE}/api/v1/authors/`;
  const jsonSend = {
    name: name,
    last_name: lastName,
    nacionalidad: nacionalidad,
    biography: biography,
    gender: gender,
    age: age,
    is_alive: isAlive,
  };

  return new Promise((resolve, reject) => {
    request.post(URL_POST, { form: jsonSend }, (err, res, body) => {
      if (res.statusCode === 201) {
        const newAuthor = JSON.parse(body);
        console.log(newAuthor);
        resolve(newAuthor);
      }
      reject("No se pudo hacer POST del autor");
    });
  });
};

const crearAutor = createAuthor(
  "José",
  "Saramago",
  "USA",
  "Escritor de muchos libros",
  "M",
  95,
  false
);

crearAutor
  .then((exito) => console.log(exito))
  .catch((error) => console.log(error));

//     2.- Escribe una función que reciba como parámetro un ID
//         para realizar una petición a la API para hallar un
//         autor con el ID especificado. La función debe retornar
//         una promesa con la respuesta del servidor.

const findOneAuthorById = (id) => {
  const URL_GET_ONE = `${URL_BASE}/api/v1/authors/${id}/`;
  return new Promise((resolve, reject) => {
    request.get(URL_GET_ONE, (err, res, body) => {
      if (res.statusCode === 200) {
        const json = JSON.parse(body);
        console.log("Este autor es" + json.name);
        resolve(json);
      }
      reject("Error al obtener al autor con este ID");
    });
  });
};
findOneAuthorById(13265);

//  3.- Escribe una función que reciba como parámetros nombre,
//         nacionalidad, biografía, género y edad para hacer una
//         petición a la API para modificar un autor existente.
//         Al ejecutar La función, esta debe retornar el autor
//         modificado en una promesa.

const updateAuthor = (name, lastName, nacionalidad, biography, gender, age) => {
  const URL_PUT = `${URL_BASE}/api/v1/authors/`;
  const jsonSend = {
    name: name,
    last_name: lastName,
    nacionalidad: nacionalidad,
    biography: biography,
    gender: gender,
    age: age,
  };

  return new Promise((resolve, reject) => {
    request.put(URL_PUT, { form: jsonSend }, (err, res, body) => {
      if (res.statusCode === 200) {
        const updatedAuthor = JSON.parse(body);
        console.log(updatedAuthor);
        resolve(updatedAuthor);
        console.log(updatedAuthor);
      }
      reject("No se pudieron hacer los cambios al autor");
    });
  });
};

const cambioAutor = updateAuthor(
  "Pedro",
  "Gonzalez",
  "Mexicano",
  "Escritor de alegrias",
  "M",
  "40"
);

cambioAutor
  .then((exito) => console.log(exito))
  .catch((error) => console.log(error));

//     4.- Escribe una función que reciba como parámetro un ID
//         para realizar una petición a la API para eliminar un
//         autor con el ID especificado. La función debe retornar
//         una promesa con la respuesta del servidor.

// PARA PROBAR QUE TUS PROMESAS FUNCIONAN:
//     5.- Encadenando promesas, es decir, usando las funciones
//         que escribiste en los puntos previos, debes:
// crear, modificar y eliminar un autor.
