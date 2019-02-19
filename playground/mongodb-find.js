
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
    if(err) {
        return console.log('Unable to connect with MongoDB server');
    }
    console.log('Connected With MongoDB server');
    //create dbName
    const db = client.db("TodoApp");

   db.collection('Todos').find().count().then((count)=>{
       console.log('Todos count',count)
   
   }).catch((err)=>{
       console.log("error ocured: ",err)
   })



   // client.close();
});