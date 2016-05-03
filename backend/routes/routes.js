/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../server.ts" />
/// <reference path="../DataAccess/blogManager.ts" />
var express = require("express");
var blogManager = require("../DataAccess/blogManager");
//var dataContext = new blogManager();
var blogManagerInstance = new blogManager();
var router = express.Router();
//This will print out the request to the console
router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});
//This is the primary route for the blog, All calls from client side that use HTTP 
//methods on the path 'blogRoute' will come through this router.
router.route("/blogRoute")
    .get(function (req, res) {
    blogManagerInstance.getAllPosts().then(function (responseFromPromise) {
        res.json(responseFromPromise);
    });
})
    .post(function (req, res) {
    blogManagerInstance.addContent(req);
});
module.exports = router;
//# sourceMappingURL=routes.js.map