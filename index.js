const PORT = Number(process.env.PORT) || 80;
const MESSAGE = process.env.MESSAGE ?? "";

var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.send(MESSAGE);
});

app.listen(PORT, () => console.log(`Serving message "${MESSAGE}" on port ${PORT}.`));
