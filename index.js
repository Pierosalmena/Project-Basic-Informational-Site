var http = require('http');
var fs = require('fs');
var url = require('url')

http.createServer(function (req,res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname === '/' ? './index.html' : '.' + q.pathname + ".html"
    fs.readFile(filename, function (err, data) {
        if(err){
            fs.readFile('./404.html', (err404, data404) => {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write(data404)
                return res.end()
            });
            
        } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
        }
    })
}).listen(8080);