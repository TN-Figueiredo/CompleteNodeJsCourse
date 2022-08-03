const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoidG5maWd1ZWlyZWRvIiwiYSI6ImNrYm9kNWFyZTF6ZncycmswdjQ5bG8ya2YifQ.pM79f4jza6kQa5bBFvCnLQ&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try again with another search.");
    } else {
      const { place_name, center } = body.features[0];
      callback(undefined, {
        longitude: center[0],
        latitude: center[1],
        location: place_name,
      });
    }
  });
};

module.exports = geocode;
