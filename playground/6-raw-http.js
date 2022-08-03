const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=6ceccbedb0dabc418d5f1139c87352be&query=40,-75`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
