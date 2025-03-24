const mongoose=require('mongoose');

const bookSchema= new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    publishyear: String,
});

const bookmodel=mongoose.model('books',bookSchema);

module.exports=bookmodel;