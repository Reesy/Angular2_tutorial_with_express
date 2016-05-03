/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
/// <reference path="../DataAccess/blogManager.ts" />
import express = require("express");
import blogManager = require("../DataAccess/blogManager");

//var dataContext = new blogManager();
var blogManagerInstance = new blogManager();

var router = express.Router();
//This will print out the request to the console
router.use((req, res, next) => {
        console.log(req.method, req.url);
        next();
});
//This is the primary route for the blog, All calls from client side that use HTTP 
//methods on the path 'blogRoute' will come through this router.
router.route("/blogRoute")
    .get((req, res) => { 
          blogManagerInstance.getAllPosts().then((responseFromPromise) => {
              res.json(responseFromPromise);
          })
    })
    .post((req, res) => {
           blogManagerInstance.addContent(req);   
    });

export = router;
