const stream = require("stream");
const fs = require("fs");
const PassThrough = stream.PassThrough;

const GLOBAL_STREAM_INPUT = new PassThrough({ objectMode: true });
const GLOBAL_STREAM_OUTPUT = new PassThrough({ objectMode: true });

const output_file_stream = fs.createWriteStream("./file1.txt", {
  flags: "a",
  encoding: null,
  mode: 0666,
});

const processor = (sanitize_cmd) => {
  // GLOBAL_STREAM_OUTPUT.push(`You have reached the processor\n`);
  // GLOBAL_STREAM_OUTPUT.push(`${sanitize_cmd} is your command.\n`);
  GLOBAL_STREAM_OUTPUT.push(`${sanitize_cmd}`);
  //   GLOBAL_STREAM_OUTPUT.push(sanitize_cmd);
};

const sanitizer = (cmd) => {
  const sanitize_cmd = Buffer.from(cmd)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, "");

  GLOBAL_STREAM_INPUT.push(sanitize_cmd);
};

// const filter = (cmd) => {
//   const found = cmd.match("hello");
//   console.log(found);
// };

const sendmessage = (cmd) => {
  const found = cmd.match("hello");
  console.log(found);
};

GLOBAL_STREAM_INPUT.on("data", processor);

// GLOBAL_STREAM_OUTPUT.on("data", filter);
GLOBAL_STREAM_OUTPUT.on("data", sendmessage);

GLOBAL_STREAM_OUTPUT.pipe(process.stdout);

// create new file: file1.txt
GLOBAL_STREAM_OUTPUT.pipe(output_file_stream);

process.stdin.on("data", sanitizer);

process.stdin.pipe(GLOBAL_STREAM_INPUT);


// process.stdin.pipe(process.stdout);
