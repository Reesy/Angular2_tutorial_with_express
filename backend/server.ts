/// <reference path="../typings/tsd.d.ts" />
/// <reference path="routes/routes.ts" />
/// <reference path="models/heroModel.ts" />
/// <reference path="DataAccess/heroManager.ts" />

import express = require("express");
import bodyParser = require('body-parser');
import routes = require('./routes/routes');

var app = express();
var router = express.Router();

app.use(express.static('../frontend'));
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Sets up the initial route
app.use('/', routes);

var server = app.listen(8081, () =>
{
    var host = server.address()
    var port = server.address().port
    console.log("Example Angular 2 at http://localhost:%s", port)
})
//Used to send a 404 error
app.use((req, res) =>
{
    res.status(404).send('Sorry 404');
});


