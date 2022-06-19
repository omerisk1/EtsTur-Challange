const express = require("express");

const server = express();
const data = require("./data");

server.get("/api", (req, res) => {
  res.json(data).status(200);
});
server.get("/api/:id", (req, res) => {
  const { id } = req.params;
  const event = data.find((item) => item.id === parseInt(id));
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).send("Data not available..");
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`${port} listening..`);
});
