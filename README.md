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

- ^C will stop your sever if you need to restart it
- if you get code: 'EADDRINUSE' error
  - you've probably got the server running in a second terminal or someone is already listening on that port
  - run: killall -9 node
