const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=6ceccbedb0dabc418d5f1139c87352be&query=43.651070,-79.347015";

request({ url: url, json: true }, (error, response) => {
  const {
    temperature,
    feelslike,
    weather_descriptions,
  } = response.body.current;
  console.log(
    weather_descriptions[0] +
      ". It is currently " +
      temperature +
      " degrees out. It feels like " +
      feelslike +
      " degrees out."
  );
});
