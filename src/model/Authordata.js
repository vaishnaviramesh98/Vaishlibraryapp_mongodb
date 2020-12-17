//accessing mongoose package

const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@vaishfiles.9lelg.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
//schema definition

const Authorschema= new Schema({

    authorname:String,
    dob:String,
    nationality:String,
    image:String
});
//model creation
var Bookdata=mongoose.model('authordata',Authorschema);
module.exports=Bookdata;