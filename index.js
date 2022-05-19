const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();


/*
    The next parameter is optional.
*/
app.use(morgan('dev'));

/*
    The below code uses express to serve up 'static' web pages.
    the __dirname is the root folder and we are just concatenating with
    a /public folder to let it know that our static pages are housed there.
    This will automatically serve up the index.html file. To get aboutus.html
    you have to specify that localhost:3000/aboutus.html.  
*/
app.use(express.static(__dirname + '/public'));


/*
    This is the default value which will appear if you specify a page that
    does not exist.
*/
app.use((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server!</h1></body></html>')

})

/*
    Create Server Takes the App as its Argument
*/
const server = http.createServer(app);

server.listen(port, hostname, () => {

    console.log(`Server running at http://{$hostname}:${port}`)

})