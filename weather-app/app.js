const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=6ceccbedb0dabc418d5f1139c87352be&query=43.651070,-79.347015";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location!");
  } else {
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
  }
});

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Toronto.json?access_token=pk.eyJ1IjoidG5maWd1ZWlyZWRvIiwiYSI6ImNrYm9kNWFyZTF6ZncycmswdjQ5bG8ya2YifQ.pM79f4jza6kQa5bBFvCnLQ&limit=1";

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try again with another search");
  } else {
    const { place_name, center } = response.body.features[0];
    console.log(
      "Longitude is: " + center[0] + " and latitude is: " + center[1]
    );
  }
});
