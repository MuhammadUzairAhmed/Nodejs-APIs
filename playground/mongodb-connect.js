//this is object
//const MongoClient = require('mongodb').MongoClient;
//destructing it
const {MongoClient, ObjectID} = require('mongodb');

//destructing is used to store the object properties into a variable

//like we have a property object
//var users = {name: 'uzair', age: 25};

//destruct it
//var {name} = users;

//print it now
//console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
    if(err) {
        return console.log('Unable to connect with MongoDB server');
    }
    console.log('Connected With MongoDB server');
    //create dbName
    const db = client.db("TodoApp");

    //creatre table name Todos and insert a new row init
    // db.collection('Todos').insertOne({
    //     text: 'Do Something',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log('result: ',JSON.stringify(result.ops,undefined,2));

    // });


    // db.collection('Users').insertOne({
    //     name: 'Uzair',
    //     age: 45,
    //     location: 'karachi'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Users',err);
    //     }
    //     console.log('result: ',JSON.stringify(result.ops,undefined,2));

    // });

    client.close();
});