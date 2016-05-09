/// <reference path="../server.ts" />

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  content: {type: 'String', default: "No Content"}
});

module.exports = mongoose.model('Hero', heroSchema);
