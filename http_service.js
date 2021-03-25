/*
console.log("hello");

var a=4;
var b=5;
var c=a+b;
console.log("addition is  " + c);
*/

//using http service
var http = require('http');
http.createServer(function(request,response){
    response.write("First Http Service");
    
    response.end();
}).listen(8080)

