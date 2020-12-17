//accessing mongoose package

const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@vaishfiles.9lelg.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
//schema definition

const Signschema= new Schema({
    
    email: String,
    password:String,

});
//model creation
var Bookdata=mongoose.model('signdata',Signschema);
module.exports=Bookdata;