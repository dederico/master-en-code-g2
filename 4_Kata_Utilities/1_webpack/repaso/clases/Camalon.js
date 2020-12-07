const Mascota = require("./Mascota");

class Camaleon extends Mascota {
  constructor(nombre, patas) {
    super(nombre, patas);
    this.color = "Verde";
  }
  setColor(nuevoColor) {
    this.color = nuevoColor;
  }
}

module.exports = Camaleon;
