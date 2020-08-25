const { createWriteStream, createReadStream, watch, statSync } = require("fs");

const file = "file.txt";

const fWriteStream = createWriteStream(file, { flags: "a", autoClose: false });

const { stdin, stdout } = process;

let from = statSync(file).size;

const onFileEvent = (data) => {
  if (data == "change") {
    let new_from = statSync(file).size;
    const fReadStream = createReadStream(file, { autoClose: false, start: from });
    fReadStream.pipe(stdout);
    setTimeout(() => {
      from = new_from;
      fReadStream.close();
    }, 100);
  }
};

watch(file, onFileEvent);
//
stdin.pipe(fWriteStream);
