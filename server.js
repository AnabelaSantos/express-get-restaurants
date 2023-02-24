//  First we invoke the require() function, specifying the name of the module as a string ('express'), and calling the returned object to create an Express application
// We can then access the properties and functions of the application object.
const express = require("express"); //import the express module ()
const app = express(); //create an express application
// Express itself is a module, as are the middleware and database libraries that we use in our Express applications.
// const { Restaurant } = require("./models/index"); //import the Restaurant model
const { sequelize } = require("./db");

const port = 3000;
app.use(express.json());

const restaurantRouter = require("./routers/restRouter");

app.use("/restaurants", restaurantRouter);

// This final block starts up the server on a specified port ('3000') and prints a log comment to the console.
//create server to listen on port 5000
const server = app.listen(3000, function () {
  // the listen() method listens for connections on the host and the port number
  console.log("Node server is running on http://localhost:3000..");
});
