const express = require('express');
// console.log('express', express);
// when testing if express is working correctly you must use node ./server/server.js
// if you do not include the . at the beginning, node will think that the file is in node_modules
const quotes = require('./modules/quotes');
// const const bodyParser = require('body-parser');
// Create our app
const app = express();

const port = 5000;

// INCANTATION:
// Share any files inside the "./server/public" folder
app.use(express.static('server/public'));

// *** OPTIONAL BODY PARSER USAGE (body parser middleware)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// all of the parts from body parser are now a part of express
app.use(express.json());
// this allows us to pass a url encoded value to express
// sometimes express
app.use(express.urlencoded({ extended: true }));
// business logic and any middle wear to convert things are going to be separated out, this makes testing work much better.
// Listen for network requests
// first argument is a port number
// the number that we are using is the port number we choose, it should be at least 3000 but can technically be kittyKat
// second argument is a function
app.listen(port, function () {
  // When the server is ready, call this function
  console.log(`I'm listening...`, port);
});
// above is very much like the onReady function

// new route -
// if you are asking for quotes, this is the function we want to run
// acts more like an event handler than a conditional (res.send is a replacement for return in this instance)
// '/quotes' acts like an address that points back to line 5
app.get('/quotes', function (req, res) {
  console.log('GET Request for quotes');
  // must end your api functions in send or end
  // res is a parameter of your get method
  res.send(quotes());
});
