const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../public/templates/views");
const partialsPath = path.join(__dirname, "../public/templates/partials");

// Setup handlebars engine and views location
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res, next) => {
  res.render("index", { title: "Weather", name: "Thiago Figueiredo" });
});

app.get("/about", (req, res, next) => {
  res.render("about", { title: "About Me", name: "Thiago Figueiredo" });
});

app.get("/help", (req, res, next) => {
  res.render("help", {
    title: "Help",
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Thiago Figueiredo",
  });
});

app.get("/weather", (req, res, next) => {
  const city = req.query.address;
  if (!city) {
    return res
      .status(400)
      .send({ status: 400, message: "You must provide an address!" });
  }
  geocode(city, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.status(400).send(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.status(400).send(error);
      }
      res.status(200).send({
        forecast: forecastData,
        location: location,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res, next) => {
  if (!req.query.search) {
    return res
      .status(400)
      .send({ status: 400, message: "You must provide a search term" });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res, next) => {
  res.render("404", {
    message: "Help article not found",
    title: "404",
    name: "Thiago Figueiredo",
  });
});

app.get("*", (req, res, next) => {
  res.render("404", {
    message: "Page not found",
    title: "404",
    name: "Thiago Figueiredo",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
