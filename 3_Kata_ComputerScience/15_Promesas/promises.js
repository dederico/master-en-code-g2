/* const edad = 3;

const promesa = new Promise((resolve, reject) => {
  if (edad >= 18) resolve("Eres mayor de edad");
  reject("No eres mayor de edad");
}); // constructor de la promesa (la primera cosa es el cumplimiento, y la segunda es el rechazo de la promesa)

// console.log(promesa);

promesa
  .then((mensaje) => {
    console.log("Este es el mensaje:");
    console.log(mensaje);
  })
  .catch((error) => {
    console.log("Sucedio una catasfrofe:");
    console.log(error);
  })
  .finally(() => {
    console.log("Finally!");
  });

  */

// Ejemplo de Promesa con numero aleatorio

const numberPromise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);
  setTimeout(
    () =>
      number > 5 ? resolve(number) : reject(new Error(" es Menor a 5 😡 ")),
    1000
  );
});
numberPromise
  .then((number) => console.log(number))
  .catch((error) => console.log(error));
