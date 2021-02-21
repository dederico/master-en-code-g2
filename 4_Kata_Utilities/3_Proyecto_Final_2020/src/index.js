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

const actionBtn = document.getElementById("demo2");
const cardText = document.getElementById("card-text");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

actionBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = `https://opentdb.com/api.php?amount=10`;
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            cardText.innerHTML = data.value.joke;
        })
        .catch((err) => console.log(err));
});
Swal.fire("Good job!", "You clicked the button!", "success");
