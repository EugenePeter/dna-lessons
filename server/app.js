const http = require("http");

const { createReadStream, createWriteStream, watch, statSync } = require("fs");
const { stdin, stdout } = process;

const file = "readme.txt";
let from = statSync(file).size;

const myWrite = createWriteStream(__dirname + "/readme.txt", { flags: "a" });
const myRead = createReadStream(file, "utf8", {
  autoClose: false,
  start: from,
});

// myRead.on("data", (chunk) => {
//   //   console.log(chunk);
//   myWrite.write(chunk);
// });

// myRead.pipe(myWrite);

const onFileEvent = (data) => {
  if (data == "change") {
    let new_from = statSync(file).size;

    const myRead = createReadStream(file, "utf8", {
      autoClose: false,
      start: from,
    });
    myRead.pipe(stdout);
    setTimeout(() => {
      from = new_from;
    }, 100);
  }
};
watch(file, onFileEvent);

stdin.pipe(myWrite);

// const server = http.createServer((req, res) => {
//   console.log(`request made: ${{ req }}`);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   myRead.pipe(res);
// });

// server.listen(3000);
// console.log("listening on port 3000");
