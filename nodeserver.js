const http = require('http');

const server = http.createServer((req, res) => {
  let requestBody = '';

  req.on('data', chunk => {
    // Collect the request body data
    requestBody += chunk.toString();
  });

  req.on('end', () => {
    // Log request 
    console.log(`Received request from: ${req.url}`);
    console.log(`Method: ${req.method}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Request Body: ${requestBody}`);

    switch (req.url) {
      case '/server':
        res.statusCode = 200;
        console.log("Callback Server Running");
        res.end('OK');
        break;
      case '/bad-request':
        res.statusCode = 400;
        res.end('Bad Request');
        break;
      case '/internal-error':
        res.statusCode = 500;
        console.log("Callback Server internal-error");
        res.end('Internal Error');
        break;
      default:
        res.statusCode = 404;
        res.end('Not Found');
    }
  });
});

server.listen(6720, () => {
  console.log('Server started on port 6720');
});
