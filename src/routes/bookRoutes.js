const express=require('express')
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata')
function router(nav){
    // var books=[
    //     {
    //         title:'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre:'Cartoon',
    //         img:"tom.jpeg"
    //     },
    //     {
    //         title:'Harry Potter',
    //         author:'J. K. Rowling',
    //         genre:'Fantasy',
    //         img:"harry.jpeg"
    //     },
    //     {
    //         title:'Pathummayude Aadu',
    //         author:'Vaikom Muhammad Basheer',
    //         genre:'Drama',
    //         img:"paathu.jpeg"
    //     },
    //     {
    //         title:'Twilight',
    //         author:'Stephenie Meyer',
    //         genre:'Fantasy Fiction',
    //         img:"tw.jpeg"
    //     },
    //     {
    //         title:'The Alchemist',
    //         author:'Paulo Coelho',
    //         genre:'Novel',
    //         img:"al.jpeg"
    //     }
    // ]
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            });
        })
            
    });
    booksRouter.post('/add',function(req,res){
        //  res.send("hey added");
        var item={
           title: req.body.title,
           author: req.body.author,
           genre : req.body.genre,
           image: req.body.image,
        }
        var book = Bookdata(item);
        book.save();//saving to db
        res.redirect('/books');
     });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",{
                nav,
                title:'Library',
                book
        });
        })
      
    });
    //copy
    booksRouter.get('/delete/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOneAndDelete({_id:id})
        .then(function(books){
            res.redirect('/books')
        })
    });
    booksRouter.get('/edit/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('editbook',{
                nav,
                title:'Library',
                book
            })
        })
    })
    booksRouter.post('/edit/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            if(!book){
                return next(new Error('cant load'))
            }
            else{
                var item={
                    title:req.body.title,
                    author:req.body.author,
                    genre:req.body.genre,
                    image:req.body.image
                }
                Bookdata.findByIdAndUpdate(id,item,(err,buk)=>{
                    res.redirect('/books/'+buk._id);
                })
            }
        })
    })


    return booksRouter;
}

module.exports=router;