const jokeForm = document.getElementById("jokeForm");
const cardText = document.getElementById("card-text");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

jokeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = firstNameInput.value || "Chuck";
  const lastName = lastNameInput.value || "Norris";
  const url = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
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
