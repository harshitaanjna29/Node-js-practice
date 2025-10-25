import os from "os";
console.log(os.platform())
console.log("memory"+os.totalmem())
console.log("available:"+os.freemem)
const freeMemory = os.freemem();
const f = freeMemory/(1024*1024*1024)
console.log(f)

console.log("total cpu : "+os.cpus().length)
const cpus = os.cpus;
