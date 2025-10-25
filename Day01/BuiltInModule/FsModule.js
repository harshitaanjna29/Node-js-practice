// fs is built in module used to perform read/write operation on file system

import fs from "fs";
// fs.writeFileSync("SampleText","A sample string to write",'utf-8')

const fileName ='FsModule.js'
const contents= fs.readFileSync(fileName,'utf-8')
console.log(contents)