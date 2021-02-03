console.log('in client.js');
$(document).ready(onReady);

function onReady() {
  console.log('So ready');

  // Grab that data from the server
  // Get /allTheQuotes

  // Use Ajax!
  // What is AJAX?
  // "Asynchronous Javascript and XML"
  // Tool for making HTTP network requests
  // from client-side javascript code
  /*   let ajaxOptions = {
    url: '/allTheQuotes',
    method: 'GET',
  }; */
  // this is called a promise
  // promise to call me back later, plz
  $.ajax({
    url: '/allTheQuotes',
    method: 'GET',
  }) // (the rest written as a chain)
    // this is called a promise
    // promise to call me back later, plz
    .then(function (response) {
      console.log('this is our response', response);
    });

  // Take array of quotes
  // loop d' loop through em
  // and .append() to the DOM
}
