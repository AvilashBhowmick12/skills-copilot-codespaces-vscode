// Create webserver 

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');

// Create a comment
router.post('/', function(req, res) {
    var comment = new Comment({
        content: req.body.content,})})