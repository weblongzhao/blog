const http = require("http");
const fs = require('fs') ;
const url = require("url");
const port = 8888 || process.argv[2] ;
http.createServer((request,response)=>{
    var parsedUrl = url.parse(request.url,true) ;
    var path = request.url ;
    var query = '' ;
    console.log(path) ;
    if(path.indexOf('?' >=0)){query = path.substring(path.indexOf("?"))}
    var pathNoQuery = parsedUrl.pathname;
    var queryObject = parsedUrl.query;
    var mathod = request.method;
    if(path=="/style.css"){
        response.setHeader('content-type','text/css;charset=utf-8');
        response.write('body{background-color:#dedede;} h1{color:red;}');
        response.end() ;
    }else if(path == "/main.js"){
        response.setHeader('content-type','text/javascript;charset=utf-8;');
        response.write('alert("js已经执行")') ;
        response.end() ;
    } else if(path =="/"){
        response.setHeader("content-type","text/html;charset=utf-8;");
        response.write('<!DOCTYPE><html>' +
            "<head><link rel='stylesheet' href='/style.css'></head>"+
            "<body><h1>我是一个标题</h1></body>"+
            "<script src='/main.js'></script>"+
            '</html>');
        response.end();
    }else{
        response.statusCode = 404;
        response.end()
    }
}).listen(port);

console.log('server start http://127.0.0.1:'+port);
