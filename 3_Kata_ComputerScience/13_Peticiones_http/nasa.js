/*const request = require("request");

const getAsteroids = (error, response, body) => {
  //JSON.stringify() // de JSON a CADENA
  // primer paso, convertir nuestro body a json para poder acceder a las llaves valores (propiedades)
  const elems = JSON.parse(body); // cadena a JSON

  // convertir los near_earth_objects en arreglo para poder iterarlos y elegir cuales vamos a usar
  var result = Object.entries(elems.near_earth_objects);
  var peligro = [];
  // iteramos cada elemento para poder agregar los elementos peligrosos a un nuevoarreglo

  result.forEach((elem) => {
    // si el elemento es peligroso, agregalo al arreglo llamado peligro
    var fechas = Object.entries(elem);

    fechas.forEach((fecha, index) => {
      var ishazardous = fecha[1][index].is_potentially_hazardous_asteroid;
      var asteroide = fecha[1][index].name;
      if (ishazardous) {
        console.log(`Los asteroides peligrosos son ${ishazardous}`);
        peligro.push(ishazardous);
      } else if (asteroide != undefined) {
        console.log(
          `Estos son los asteroides que no son peligrosos ${JSON.stringify(
            asteroide
          )}`
        );
      }
    });
  });
  // imprimimos el arreglo peligro con elementos peligrosos
  console.log(peligro);
};

request(
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-11-16&end_date=2020-11-20&api_key=MlQaof71fKekRZTOjg9xkQqc9nwAj4JRsqbMxCFS",
  getAsteroids
);

*/

// const start_date = "2020-06-22";
// const end_date = "2020-06-29";
// const API_KEY = "MlQaof71fKekRZTOjg9xkQqc9nwAj4JRsqbMxCFS";

// request(
//   `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}end_date=${end_date}&api_key=${API_KEY}`,
//   (error, response, body) => {
//     if (response.statusCode === 200) {
//       const nearObjs = JSON.parse(body).near_earth_objects;
//       //const a = { 23: [], 24: [], 25: [], 26: [], 27: [] };

//       const arreglo = Object.values(nearObjs) // nos devuelve un arreglo de los objetos de cada fecha
//         /*const a = [
//         [{ id: 23 }],
//         [],
//         ];*/
//         .map((listaPorFecha) => {
//           // ir revisando cada fecha

//           const arrelgoDeAsteroidesPorFecha = listaPorFecha.map((asteroide) => {
//             // iterer por aasteroide
//             /*{id:23}*/

//             return {
//               nombreAsteroide: asteroide.id,
//               peligroso: is_potentially_hazardous_asteroid ? "Si" : "No",
//             };
//           });
//           // arrelgoDeAsteroidesPorFecha =[{nombreAsteroide:23}]
//           return;
//           console.log(Object.keys(obj));
//         });
//     }
//   }
// );

const request = require("request");

// body.near_earth_objects.2015-09-08[n].is_potentially_hazardous_asteroid (pueden ser muchas fechas)

const getGlobalExtinction = (start_date, end_date) => {
  const API_KEY = "MlQaof71fKekRZTOjg9xkQqc9nwAj4JRsqbMxCFS";
  const NASA_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`;
  request.get(NASA_URL, (error, response, body) => {
    if (response.statusCode === 200) {
      const json = JSON.parse(body);
      const dates = Object.keys(json.near_earth_objects);
      dates.forEach((date) => {
        console.log("/n", date);
        json.near_earth_objects[date].forEach((asteroid) => {
          const name = asteroid.name;
          const magnitude = asteroid.absolute_magnitude_h;
          const isHazardous = asteroid.is_potentially_hazardous_asteroid;
          if (isHazardous) {
            console.log(
              `${name} with magnitude ${magnitude} is hazardous ${isHazardous}`
            );
          }
        });
      });
    }
  });
};

getGlobalExtinction("2020-11-16", "2020-11-20");
