const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello welcome to my server!");
    res.end();
  }
  if (req.url === "/about") {
    res.end("Here is our history");
  }
});
server.listen(3000);
