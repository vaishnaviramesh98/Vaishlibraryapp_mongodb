const express=require('express')
const authorsRouter=express.Router();
const Authordata=require('../model/Authordata')
function router(nav){
    // var authors=[
    //     {
    //         name:'Joseph Barbera',
    //         nationality:'American',
    //         dob:'24 March 1911',
    //         img:"joseph.jpeg"
    //     },
    //     {
    //         name:'J. K. Rowling',
    //         nationality:'English',
    //         dob:'31 July 1965 ',
    //         img:"jk.jpeg"
    //     },
    //     {
    //         name:'Vaikom Muhammad Basheer',
    //         nationality:'Indian',
    //         dob:'21 January 1908',
    //         img:"basheer.jpeg"
    //     },
    //     {
    //         name:'Stephenie Meyer',
    //         nationality:'American',
    //         dob:'24 December 1973',
    //         img:"sm.jpeg"
    //     },
    //     {
    //         name:'Paulo Coelho',
    //         nationality:'Brazilian',
    //         dob:'24 August 1947',
    //         img:"Paulo Coelho.jpeg"
    //     }
    // ]
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
        })
            
    });
    authorsRouter.post('/add',function(req,res){
        //  res.send("hey added");
        var item={
           authorname: req.body.authorname,
           dob: req.body.dob,
           nationality : req.body.nationality,
           image: req.body.image,
        }
        var book = Authordata(item);
        book.save();//saving to db
        res.redirect('/authors');
     });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:'Library',
                author
        });
        })
      
    });
    //copy
    authorsRouter.get('/delete/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOneAndDelete({_id:id})
        .then(function(authors){
            res.redirect('/authors')
        })
    });
    authorsRouter.get('/edit/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('editauthor',{
                nav,
                title:'Library',
                author
            })
        })
    })
    authorsRouter.post('/edit/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            if(!author){
                return next(new Error('cant load'))
            }
            else{
                var item={
                    authorname: req.body.authorname,
                    dob : req.body.dob,
                    nationality: req.body.nationality,
                    image: req.body.image
                }
                Authordata.findByIdAndUpdate(id,item,(err,authr)=>{
                    res.redirect('/authors/'+authr._id);
                })
            }
        })
    })
   
    return authorsRouter;
}

module.exports=router;