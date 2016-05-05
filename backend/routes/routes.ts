/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
/// <reference path="../DataAccess/heroManager.ts" />
import express = require("express");
import heroManager = require("../DataAccess/heroManager");

//var dataContext = new heroManager();
var heroManagerInstance = new heroManager();

var router = express.Router();
//This will print out the request to the console
router.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
});
//This is the primary route for the hero, All calls from client side that use HTTP 
//methods on the path 'heroRoute' will come through this router.
router.route("/heroRoute")
    .get((req, res) => { 
          heroManagerInstance.getHeroes().then((responseFromPromise) => {
              res.json(responseFromPromise);
          })
    })
    .post((req, res) => {
           heroManagerInstance.saveHero(req);   
    });

export = router;
