const stream = require("stream");
const fs = require("fs");
const PassThrough = stream.PassThrough;

const GLOBAL_STREAM_INPUT = new PassThrough({ objectMode: true });
const GLOBAL_STREAM_OUTPUT = new PassThrough({ objectMode: true });

// const output_file_stream = fs.createWriteStream("./file1.txt", {
//   flags: "a",
//   encoding: null,
//   mode: 0666,
// });

const readUpdates = () => {
  console.log(updates);
};

const updates = fs.watch("./file1.txt", () => {
  console.log();
});

fs.watch("./file1.txt", (curr, prev) => {
  const readMessage = (data) => {
    console.log(data.toString());
  };
  let data = fs.readFileSync("file1.txt", "utf8");
  readMessage(data);

  fs.readFileSync("./file1.txt", function (err, contents) {
    console.log(contents);
  });
});

const output_file_stream = fs.createWriteStream("./file1.txt", {
  flags: "a",
  encoding: null,
  mode: 0666,
});

// const input_file_stream = fs.createReadStream("./file1.txt", "utf8");

const sanitizer = (cmd) => {
  const sanitize_cmd = Buffer.from(cmd)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, "");

  GLOBAL_STREAM_INPUT.push(sanitize_cmd);
};

const processor = (sanitize_cmd) => {
  GLOBAL_STREAM_OUTPUT.push(`${sanitize_cmd}\n`);
};

const sendmessage = (cmd) => {
  const found = cmd.match("hello");
  console.log(found);
};

process.stdin.on("data", sanitizer);
GLOBAL_STREAM_INPUT.on("data", processor);
GLOBAL_STREAM_OUTPUT.on("data", sendmessage);
GLOBAL_STREAM_OUTPUT.pipe(output_file_stream);
