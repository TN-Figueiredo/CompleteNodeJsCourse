const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataString = dataBuffer.toString();
const data = JSON.parse(dataString);
data.name = "Thiago";
data.age = 31;

const userJSON = JSON.stringify(data);

fs.writeFileSync("1-json.json", userJSON);
