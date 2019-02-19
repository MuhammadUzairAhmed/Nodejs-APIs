
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
    if(err) {
        return console.log('Unable to connect with MongoDB server');
    }
    console.log('Connected With MongoDB server');
    //create dbName
    const db = client.db("TodoApp");

db.collection('Todos').findOneAndUpdate({_id: new ObjectId("5c6bdb60dede05ea0d9f24bf")},
{$set: {completed: true}},
{returnOriginal: false}).then((res)=>{
    console.log('Todos updated',res)

}).catch((err)=>{
    console.log("error ocured: ",err)
})



   // client.close();
});