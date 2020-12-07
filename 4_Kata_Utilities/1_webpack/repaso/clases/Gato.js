const Mascota = require("./Mascota");

class Gato extends Mascota {
  constructor(nombre, patas, colorOjos) {
    super(nombre, patas);
    this.vidas = 7;
    this.colorOjos = colorOjos;
  }
  ronronear() {
    return `${this.nombre} de ojos ${this.colorOjos} esta ronroneando`;
  }
}

module.exports = Gato;
