// Create web server
import { createServer } from 'http';

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
