const net = require("net");

const express = require("express");
const fs = require("fs");

const PORT = 6969;
const PORT2 = 3000;
const server = net.createServer();

const app = express();

const video = "./recording.mp4";

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-type": "video/mp4" });
  const stream = fs.createReadStream(video);
  stream.pipe(res);
});

app.listen(PORT2, () => {
  console.log("lsiteningon port 3000");
});

server.on("connection", (stream) => {
  stream.on("data", (data) => {
    console.log(`Got Data`, data.length);
  });

  const file_name = `recording.mp4`;

  const writeStream = fs.createWriteStream(file_name);

  stream.pipe(writeStream);
});

server.listen(PORT);
console.log("listening on port 6969");
