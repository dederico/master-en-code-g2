const request = require("request");

const getPokemonName = (name) => {
  request.get(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    (err, response, body) => {
      if (response.statusCode === 200) {
        const json = JSON.parse(body);
        console.log(json.name);
      } else {
        console.log("Ocurrio un error");
      }
    }
  );
};

console.log("Termino la peticion");

getPokemonName("pikachu");
