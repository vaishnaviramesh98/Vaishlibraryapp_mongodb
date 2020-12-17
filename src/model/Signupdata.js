//accessing mongoose package

const mongoose=require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@vaishfiles.9lelg.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
//schema definition

const Signschema= new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone:String,
    dob:String,
    password:String,
    password1:String
});
//model creation
var Bookdata=mongoose.model('signdata',Signschema);
module.exports=Bookdata;