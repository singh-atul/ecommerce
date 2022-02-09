const express = require("express");
var router = express.Router();
/*
Code to Route the request url to there respective controller
*/
const categoryController = require("../../../src/controller/categoryController");
router.post("/all", categoryController.listCategories);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;
