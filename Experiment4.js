const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello ABES");
});

server.listen(3000, () => {
    console.log("Server Started");
});
