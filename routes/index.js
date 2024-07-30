var express = require('express');
var router = express.Router();
// var books = require('../resources/books');
var Books = require('../models/books')

/* GET home page. */
router.get('/', async function(req, res, next){
  const books = await Books.find()
  res.render('index', { title: 'Book App' ,bookList: books}); //passing value to index.ejs
});


module.exports = router;
