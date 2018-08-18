//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//serve static content for the app from the "public directory"
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//imports the routes to be used by the server
var routes = require("./controllers/burger_controllers.js");

app.use(routes);

//listener
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});

