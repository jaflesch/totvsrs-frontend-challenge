//Módulos
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const types = {
    "html": "text/html",
    "js": "text/javascript",
    "css": "text/css",
    "png": "image/png"
};

http.createServer(function(req, res) {
    const uri = url.parse(req.url).pathname;
    const filename = path.join(process.cwd(), uri);
    fs.exists(filename, function(exists) {
        if(!exists) {
            console.log("Not exists: " + filename);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('404 Not Found\n');
            res.end();
            return;
        }
        const type = types[path.extname(filename).split(".")[1]];
        res.writeHead(200, {'Content-Type':type});

        const fileStream = fs.createReadStream(filename);
        fileStream.pipe(res);

    });
}).listen(1337);