// alert("Perro");
// Cumpleanos de Armando es el 8 de diciembre
// (tel) si tengo dinero
// Normalmente cuando las promesas no se cumplen
// vienen una razon (pretexto)

const promesaCumple = new Promise((resolve, reject) => {
  const dinero = Math.floor(Math.random() * 1000);
  console.log("Esperando el cumple de armando junte");
  console.log(dinero);
  setTimeout(
    () =>
      dinero >= 500
        ? resolve("Feliz Cumpleanos 📲") // true
        : reject("No junte el dinero 😔"), // false
    100
  );
});

//const MyFunction = () => {
//  return new Promise();
//};
// iconos CTRL + COMMAND + SPACE

promesaCumple
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// FORMA DE FUNCION

const MyFunction = (dinero) => {
  return new Promise((resolve, reject) => {
    console.log("Esperando al cumple de armando en funcion");
    setTimeout(
      () => (dinero >= 500 ? resolve("Felicidades") : reject("No hubo lana")),
      1000
    );
  });
};

MyFunction(400)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
