var express = require('express');
var router = express.Router();
var Books = require('../models/books')

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('addBooks', { title: 'Add Books' }); //passing value to addBooks.ejs
});

router.post('/save', function(req, res, next){
    const book = new Books(req.body);
    book.save();
    res.redirect('/')
})


router.get('/edit/:_id',  async function(req, res, next) {
    const book = await Books.findOne({_id : req.params._id}) ;
    // const book = books.find ((book)=> book._id === req.params._id)
    console.log(book)
    res.render('editBooks', { title: 'Edit Books', book });

    
});

router.post('/saveEdited/:_id',async function(req, res, next){
    // Syntax = collectionName.updateOne(query, updateParams)
    await Books.updateOne({_id: req.params._id},{$set: req.body})
    // const currIndex = books.findIndex((book)=> book._id === req.params._id)
    // books.splice(currIndex, 1, {...req.body,  _id:req.params._id})
    res.redirect('/')
})

router.get('/delete/:_id', async function(req, res, next){
    await Books.deleteOne({_id: req.params._id})
    res.redirect('/');
});



module.exports = router;
