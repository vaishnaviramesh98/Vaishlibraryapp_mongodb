const express=require('express')
const loginRouter=express.Router();
const Signupdata=require('../model/Signupdata');


function router(nav){
    // var authors=[
    //     {
    //         title:'tom and jerry',
    //         author:'joseph barbera',
    //         genre:'cartoon',
    //         img:"1.jpeg"
    //     },
    //     {
    //         title:'harry poter',
    //         author:'jk',
    //         genre:'fantasy',
    //         img:"l.jpeg"
    //     },
    //     {
    //         title:'fathooma',
    //         author:'basheer',
    //         genre:'drama',
    //         img:"m.jpeg"
    //     }
    // ]
    
    loginRouter.get('/',function(req,res){
            res.render("login",{
                nav,
                title:'Library',
                loginError:""
            });  
        });
  
   
    loginRouter.post('/',function(req,res){
        var mail=req.body.email;
        var pass=req.body.password;
        console.log("email  :  "+mail +"pass  :  "+pass);
    
    Signupdata.findOne({email:mail,password:pass})
    .then((signin)=>{
        if(signin==null){
            res.render("login",{
                nav,
                title:'Library',
                loginError:"Invalid user or password"
            })
            res.render("login");
        }
        else{
            res.redirect('/books');
        }
    })
 
 
    })

       
    return loginRouter;
}

module.exports=router;



