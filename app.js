const express=require('express');


const app= express();
const nav=[
    // {
    //     link:'/books',
    //     name:'books'
    // },
    // {
    //     link:'/authors',
    //     name:'authors'
    // },
    {
        link:'/signin',
        name:'Sign in'
    },
    {
        link:'/login',
        name:'login'
    }

    
   
];
const navbook=[
    {
        link:'/books',
        name:'books'
    },
    {
        link:'/createbook',
        name:'createbook'
    },
 
    {
        link:'/authors',
        name:'authors'
    },
    // {
    //     link:'/signin',
    //     name:'Sign in'
    // },
    // {
    //     link:'/login',
    //     name:'login'
    // },
    {
        link:'/',
        name:'logout'
    }

    
   
];
const navauthor=[
    {
        link:'/books',
        name:'books'
    },
    {
        link:'/authors',
        name:'authors'
    },
    {
        link:'/createauthor',
        name:'createauthor'
    },
    
    // {
    //     link:'/signin',
    //     name:'Sign in'
    // },
    // {
    //     link:'/login',
    //     name:'login'
    // },
    {
        link:'/',
        name:'logout'
    }
  
  
   
];

const booksRouter=require('./src/routes/bookRoutes')(navbook);
const authorsRouter=require('./src/routes/authorRoutes')(navauthor);
const signupRouter=require('./src/routes/signRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const createbookRouter=require('./src/routes/createbookRoutes')(navbook);
const createauthorRouter=require('./src/routes/createauthorRoutes')(navauthor);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');


app.use('/books',booksRouter); //to use bootsrouter when /books is in use ||whenever a request for /books comes use booksrouter
app.use('/authors',authorsRouter);
app.use('/signin',signupRouter);
app.use('/login',loginRouter);
app.use('/createbook',createbookRouter);
app.use('/createauthor',createauthorRouter);


app.get('/',function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{
        nav,
        title:'Library'
    });
});

//exp
app.post('/', function(req, res){
  console.log(req.body.user);
  res.redirect('back');
});



app.listen(4000);


