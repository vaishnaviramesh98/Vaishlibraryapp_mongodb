//accessing mongoose package

const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@vaishfiles.9lelg.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
//schema definition

const Bookschema= new Schema({
    title: String,
    author: String,
    genre: String,
    image:String
});
//model creation
var Bookdata=mongoose.model('bookdata',Bookschema);
module.exports=Bookdata;