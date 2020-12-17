const express=require('express')
const signupRouter=express.Router();
const Signupdata=require('../model/Signupdata');
function router(nav){
  
        signupRouter.get('/',function(req,res){
               res.render("signin",{
                   nav,
                   title:'Library'
               });
        });
     
        signupRouter.post('/add',function(req,res){
            //  res.send("hey added");
            var item={
            firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              phone:req.body.phone,
              dob:req.body.dob,
              password:req.body.password,
              password1:req.body.password1,
            }
            var signup = Signupdata(item);
            signup.save();//saving to db
            res.redirect('/login');
         });
    
    return signupRouter;
}

module.exports=router;