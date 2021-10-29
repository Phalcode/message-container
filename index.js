const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const PORT = Number(process.env.PORT) || 80;
const MESSAGE = process.env.MESSAGE ?? "";

const app = express();
app.use(cors());
app.use(helmet());

app.get("/", (request, response) => {
  response.send(MESSAGE);
});

app.listen(PORT, () => console.log(`Serving message "${MESSAGE}" on port ${PORT}.`));
