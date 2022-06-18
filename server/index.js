const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res
    .json({
      title: "title 1",
      description: "description",
    })
    .status(200);
});

const port = 3000;
server.listen(port, () => {
  console.log(`${port} listening..`);
});
