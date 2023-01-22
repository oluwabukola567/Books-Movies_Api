//path 
const path = require("path");


const pathObj = path.parse(__filename);

console.log(pathObj);

// os module
 const os = require("os");

 var totalMemory = os.totalmem();
 var freeMemory = os.freemem();
 console.log("Total Memory", + totalMemory);
 console.log("Free Memory", + freeMemory);




