const http = require("http");
const fs = require("fs");
const port = 1998;

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(('../clone.html'), (error, data)=>{
        if(!error){
            res.write(data)
        }else{
            res.write(error)
        }
        res.end()
    })
   
   
})

server.listen(port, (error)=>{
    if(!error){
        console.log("Server Started on port:" + port);
    }else{
        console.log(error);
    }
})