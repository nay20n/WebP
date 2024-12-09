const http = require('http');
const server = http.createServer();

server.on('request',(req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end("<h1>Hello World !</h1>");
})

server.listen(100,()=>{
    console.log("server listens on port 1000 !");
})
