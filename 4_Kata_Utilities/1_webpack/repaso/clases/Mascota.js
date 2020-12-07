class Mascota {
  // Metodo especial
  // Todas las clases lo tienen
  // Es lo primero en ejecutrarse, cuando se haga una instancia
  constructor(nombre, patas) {
    this.nombre = nombre;
    this.patas = patas;
  }
  comer() {
    return `${this.nombre} esta comiendo.`;
  }
}
// Commonjs
module.exports = Mascota;
