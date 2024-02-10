var http = require('http');
var fs =require('fs');
http.createServer(function(req,res){
    fs.readFile('demofile1.html',function(err,dada){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();

    });
}).listen(8081)