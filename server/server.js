const express = require('express');
// console.log('express', express);
// when testing if express is working correctly you must use node ./server/server.js
// if you do not include the . at the beginning, node will think that the file is in node_modules

// Create our app
const app = express();

const port = 5000;

// INCANTATION:
// Share any files inside the "./server/public" folder
app.use(express.static('server/public'));

// Listen for network requests
// first argument is a port number
// the number that we are using is the port number we choose, it should be at least 3000 but can technically be kittyKat
// second argument is a function
app.listen(port, function () {
  // When the server is ready, call this function
  console.log(`I'm listening...`, port);
});
// above is very much like the onReady function
