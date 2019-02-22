var express = require('express');
var bodyParser= require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

//jtni bh id hgi mongodb mein wo is kk through askti hain ye defualt h
var { ObjectId } = require('mongodb');

var app = express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{

 var newTodo = new Todo({
    text: req.body.text
 });

 newTodo.save().then((doc)=>{res.send(doc)}).catch((err)=>{res.status(400).send(err)});
});

app.get('/todos',(req,res)=>{

  
   
    Todo.find().then((todos)=>{res.send(todos)}).catch((err)=>{res.status(400).send(err)});
   });

//req.params mein :id pass horhi ha to isko hm req.params.id krenga to id get krlega
   app.get('/todos/:id',(req,res)=>{
var id = req.params.id;
if(!ObjectId.isValid(id)){
    return res.status(400).send();
}
    
 Todo.findById(id).then((todos)=>{
     if(!todos){
         return res.status(400).send();
     }
     res.send(todos)
}).catch((err)=>{
    res.status(400).send();
 })
   });

app.listen(3000,()=>{
    console.log('server is running on port 3000')
});



module.exports = {app}

// var newTodo = new Todo({
//     text:'cook dinner'
// });


// var otherTodo = new Todo({
//     text:'   asdasfdbcde   ',
    
//     completedAt: 123
// })
// newTodo.save().then((res)=>{console.log('saved successfully ', res)}).catch((err)=>{console.log('failed to saved data ',err)});

// otherTodo.save().then((res)=>{console.log('saved successfully ', res)}).catch((err)=>{console.log('failed to saved data ',err)});




// var user = new User({
//     email:'uzair@gmail.com'
// });
// user.save().then((res)=>{console.log('saved successfully ', res)}).catch((err)=>{console.log('failed to saved data ',err)});