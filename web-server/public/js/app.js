console.log("client side javascript file is loaded");

const getForecast = (location) => {
  firstMessage.textContent = "Loading . . .";
  secondMessage.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        response.json().then((data) => {
          firstMessage.textContent = data.location;
          secondMessage.textContent = data.forecast;
        });
      } else {
        firstMessage.textContent =
          "We didn't find the address. Try another search";
      }
    })
    .catch((error) => console.log(error));
};

const form = document.querySelector("form");
const search = document.querySelector("input");
const firstMessage = document.getElementById("first-message");
const secondMessage = document.getElementById("second-message");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = search.value;
    getForecast(location);
  });
}
