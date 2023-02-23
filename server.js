//  First we invoke the require() function, specifying the name of the module as a string ('express'), and calling the returned object to create an Express application
// We can then access the properties and functions of the application object.
const express = require("express"); //import the express module ()
const app = express(); //create an express application
// Express itself is a module, as are the middleware and database libraries that we use in our Express applications.
const { Restaurant } = require("./models/index"); //import the Restaurant model
const { sequelize } = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below:
// Route definition - The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root.
// The callback function takes a request and a response object as arguments, and calls send() on the response to return the object restaurant in a json envelope
app.get("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.findAll();
  res.json(restaurant);
});

app.use(express.json());
app.post("/restaurants", async (req, res, next) => {
  //next() can be used to pass control to the next handler
  const { name, location, cuisine } = req.body;
  if ((name, location, cuisine)) {
    await Restaurant.create({
      name: name,
      location: location,
      cuisine: cuisine,
    });
  }
  res.json(201);
});

app.use(express.json());
app.put("/restaurants/:id", async (req, res, next) => {
  //next() can be used to pass control to the next handler
  const restaurant = await Restaurant.findByPk(req.params.id);
  restaurant.update({
    name: req.body.name,
    location: req.body.location,
    cuisine: req.body.cuisine,
  });
  res.json("Put Successful!");
});

app.use(express.json());
app.delete("/restaurants/:id", async (req, res, next) => {
  //next() can be used to pass control to the next handler
  const restaurant = await Restaurant.findByPk(req.params.id);
  restaurant.destroy();
  res.json("Delete Successful!");
});

// This final block starts up the server on a specified port ('3000') and prints a log comment to the console.
//create server to listen on port 5000
const server = app.listen(3000, function () {
  // the listen() method listens for connections on the host and the port number
  console.log("Node server is running on http://localhost:3000..");
});
