const fs = require("fs");

const file = fs.readFile("./file.txt", (err, buff) => {
  const strBuff = Buffer.from(buff)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, ",");
  console.log(strBuff);
  fs.writeFile("./file-comma.txt", strBuff, () => {});
});
