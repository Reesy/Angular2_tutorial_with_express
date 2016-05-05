/// <reference path="../server.ts" />

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  ID: {type: 'Number', default: "No ID"}
 ,content: {type: 'String', default: "No Content"}

});

module.exports = mongoose.model('Hero', heroSchema);
