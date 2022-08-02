const path = require("path");
const express = require("express");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../public/templates");

// Setup handlebars engine and views location
app.set("views", viewsPath);
app.set("view engine", "hbs");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res, next) => {
  res.render("index", { title: "Weather", name: "Thiago Figueiredo" });
});

app.get("/about", (req, res, next) => {
  res.render("about", { title: "About Me", name: "Thiago Figueiredo" });
});

app.get("/help", (req, res, next) => {
  res.render("help", { title: "Help", helpText: "This is some helpful text." });
});

app.get("/weather", (req, res, next) => {
  res.send({
    forecast: "It is snowing",
    location: "Minas Gerais",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
