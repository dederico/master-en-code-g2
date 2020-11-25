// Hacer una funcion que haga una petición
//     (Ejemplo: peticionLibro(“i robot”);
// Buscar un libro y traer el o los autores del primer libro
// http://openlibrary.org/search.json?q=i+robot)

const request = require("request");

console.log(
  "Consigue el nombre del autor, poniendo el nombre del libro como parametro"
);

const getAuthorName = (BookName) => {
  const URL_OPEN_LIBRARY = `https://openlibrary.org/search.json?q=${BookName}`;
  request.get(URL_OPEN_LIBRARY, (err, response, body) => {
    if (response.statusCode === 200) {
      const json = JSON.parse(body);
      json.docs[0].author_name.forEach((author) => console.log(author));
    } else {
      console.log("Ocurrio un error", response.statusCode);
    }
  });
};

//console.log("Termino la peticion");

getAuthorName("Te cuento un cuento");
