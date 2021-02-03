# Cullen Express Intro

Gonna be great... :

.json (javascript object notation) - used for configuration to track information about the project

1. In Terminal initialize as a node project repo "npm init"
2. Terminal will check for what the defaults are, return through each until it checks if it's okay
3. in terminal run "npm install express"

- adds dependencies: "express" : "^4.17.1"
  - at least version 4.17.1
- new folder called node modules
  - This is where we can find the express file which is a new LIBRARY FOR US TO USE!!!

4. now we need to tell git to ignore the node_modules

- .gitignore
- Tell this file to ignore node_modules

5. now we need to install body-parser: npm install body-parser
6. Now you are ready to start your server!

- add a server directory and a server.js file within it
- When you type localhost:5000 (or whatever port number you gave), you'll first get an error: "cannot GET /"
  - simply because we have no files to grab yet

7. Add a public file to put in your html.index and anything you'd want to send out to your users

- anything you want to share must be in that public folder, can be in a directory within public
- THESE ARE CLIENT SIDE

8. You can set up a simpler way to get your code up in running

- Open package.json and add "start": "node ./server/server.js" to scripts make sure to add a comma before!
- now you can start your server with npm start

- ^C will stop your sever if you need to restart it
- if you get code: 'EADDRINUSE' error
  - you've probably got the server running in a second terminal or someone is already listening on that port
  - run: `killall -9 node`
- if you are pulling from another repo, you'll need to install node_modules again, but you can run npm install for that
- big errors if you put spaces in you file or directory names

## LEVEL UP

- body-parser is now apart of the express package
- You'll want to keep your modules separate for business data etc.
  - makes testing easier

## API

API = "Application Program Interface"

Web server (eg. a Node.js server) with endpoints (ie. "URLs") that can receive or send data.

### GET /quotes

Returns a new quote, every time you hit it.

Like so:

```json
{
  "quote": "Something pithy",
  "author": "someone smart"
}
```

### POST /quotes

Create a new quote, like

```json
{
  "quote_to_add": {
    "quote": "Something pithy",
    "author": "someone smart"
  }
}
```
