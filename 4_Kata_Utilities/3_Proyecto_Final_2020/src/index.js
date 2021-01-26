// commonJS la forma que corre node
// const greeting = require("greetings");

// Babel o ECMA6
import greeting from "./greetings";
import "./assets/css/main.scss";
import AOS from "aos";
import "bootstrap";
console.log(greeting("generacion-2"));
AOS.init("Somos");
console.log("Somos Libres!");
