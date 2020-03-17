const http = require('http');
const fs = require('fs');

/**
 * 其他还有 npm 包 httpserver 可以直接启动静态服务
 */

http.createServer(function (req, res) {
    res.writeHead(200);
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    //res.end('hello');
}).listen(3000)