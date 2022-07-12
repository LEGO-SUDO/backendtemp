console.log("hello");
const os = require("os");
console.log(os.userInfo());
console.log(os.uptime());
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmemory: os.totalmem(),
  freespace: os.freemem(),
};
console.log(currentOS);
