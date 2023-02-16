const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/server') {
    res.statusCode = 200;
    console.log("Callback Server Running")
    res.end('OK');
    
  } else if (req.url === '/bad-request') {
    res.statusCode = 400;
    res.end('Bad Request');
    console.log('Error page with bad request');
  } else if (req.url === '/internal-error') {
    console.log(req.body);
    res.statusCode = 500;
    res.end('Internal Error');
    console.log("Callback Server internal-error")
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(6720, () => {
  console.log('Server started on port 6720');
});
