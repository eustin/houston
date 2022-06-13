# Houston

This will be a React app that uses data from some third party API to show the user
upcoming rocket launches. 

The backend will be a Node.js server running an Express app. 

The first version of the app won't need to persist data in a database. 

## Current state of the website

![](houston-current-state.jpg)

* HTTP Node.js server (to be later replaced with an HTTPS web server)
* Express app with single route to get latest launches, which uses a launches controller (to handle the incoming request and outgoing response), which uses a launches model to make the network request to the third party API 
* CORS middleware to whitelist client origin
* .env files to create environment variables
* Fullstack package.json to bring up the React frontend and Node backend in a single command 



## How to install frontend and backend dependencies

In the root of this repo, you'll find a `package.json` file with a `install` convenience script. Running `npm install` will install both frontend and backend dependencies.  

## How to run the application stack

In the root of this repo, issue `npm run watch`. 
