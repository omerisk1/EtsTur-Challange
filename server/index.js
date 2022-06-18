const express = require("express");

const server = express();
const data = require("./data");

server.get("/api", (req, res) => {
  res
    .json(data)
    .status(200);
});

const port = 5000;
server.listen(port, () => {
  console.log(`${port} listening..`);
});
