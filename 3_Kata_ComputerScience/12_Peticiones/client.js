const request = require("request");
// console.log("Empezando peticion");
// request.get("https://www.google.com", (err, response, body) => {
//   console.log(response.statusCode);
// });
// console.log("Termino la peticion");

console.log("Empezando la peticion de pokemones...");
request.get(
  "https://pokeapi.co/api/v2/pokemon/pikachu",
  (err, response, body) => {
    console.log(response.statusCode);
    console.log(response.types);
  }
);
