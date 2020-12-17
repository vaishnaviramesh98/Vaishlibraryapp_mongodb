const express=require('express')
const createbookRouter=express.Router();


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
    
    createbookRouter.get('/',function(req,res){
            res.render("createbook",{
                nav,
                title:'Library',
                // authors
            });
          
            
    });
 
     

       
    return createbookRouter;
}

module.exports=router;



