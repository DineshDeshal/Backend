const express = require('express');
// creating instance of express to create express app
// if you want something from class then you  have to use . instead of ().
const app = express(); //app is an object so we are using dot notation.
// create router instance for routing from express
const router = express.Router();
router.get('/hello', function(req, res) {
    console.log("Someone has hit the home page");   
    res.send({message: 'Home'});
});

// this middleware will execute for every request made on server
// global middleware for all api calling defined with  app.use()
app.use('/',router)
// parse incoming requests data in a middleware before reaching routes
app.use(express.json());    
// app.use(express.urlencoded({ extended: true }));    

// define port number where our server will run
const PORT= process.env.PORT || 5000;

// start listening on that particular port
app.listen(PORT, () => console.log(`Server started at ${PORT}`))


// ================================ CRUD Operations =====================================

// Create - add new employee
// req : contains information about HTTP request and response
//        it includes headers , parameters , body etc.
// res : contains information about HTTP response
//        it includes status code , header fields , message body etc.

app.post("/employee",function(req,res){
   let emp={
       id : Math.floor(Math.random()*100),
       name : req.body.name,
       email : req.body.email,
       phone : req.body.phone
   };
   console.log(emp);
});

// Read - get details of specific employee by its ID