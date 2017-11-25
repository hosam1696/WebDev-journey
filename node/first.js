var http = require("http");
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
    
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile('./index.html', function(data){
        console.log(data);
        res.write(data);
        res.end();
    });

    
    
    
});

server.listen(process.env.PORT, process.env.IP, function(){
    
   console.log("Server working..");
   
   
    
});