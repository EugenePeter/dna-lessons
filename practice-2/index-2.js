// const stream = require("stream");
// const fs = require("fs");
// const PassThrough = stream.PassThrough;

// const found = require("./index");

const fs = require("fs");
const stream = require("stream");
const PassThrough = stream.PassThrough;

const GLOBAL_STREAM_INPUT = new PassThrough({ objectMode: true });
const GLOBAL_STREAM_OUTPUT = new PassThrough({ objectMode: true });

const readMessage = (data) => {
  console.log(data.toString());
};
let data = fs.readFileSync("file1.txt", "utf8");
readMessage(data);

// GLOBAL_STREAM_OUTPUT.on("data", displayMessage);
GLOBAL_STREAM_OUTPUT.pipe(process.stdout);
