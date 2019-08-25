const fs = require('fs');

requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const body = [];
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My NodeJs APp</title></head>')
        res.write('<body>')
        res.write("<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>")
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        req.on('data', chunk => {
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('Message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        })

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My NodeJs APp</title></head>')
    res.write('<body>')
    res.write("<h1>This is end of Response</h1>")
    res.write('</body>')
    res.write('</html>');
    res.end();
}

exports.route = requestHandler;