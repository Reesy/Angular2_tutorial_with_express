/// <reference path="../typings/tsd.d.ts" />
/// <reference path="routes/routes.ts" />
/// <reference path="models/blogModel.ts" />
/// <reference path="DataAccess/blogManager.ts" />
var express = require("express");
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var app = express();
var router = express.Router();
app.use(express.static('../frontend'));
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Sets up the initial route
app.use('/', routes);
var server = app.listen(8081, function () {
    var host = server.address();
    var port = server.address().port;
    console.log("Reesy.net at http://localhost:%s", port);
});
//Used to send a 404 error
app.use(function (req, res) {
    res.status(404).send('Sorry 404');
});
//# sourceMappingURL=server.js.map