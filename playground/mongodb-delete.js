
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) =>{
    if(err) {
        return console.log('Unable to connect with MongoDB server');
    }
    console.log('Connected With MongoDB server');
    //create dbName
    const db = client.db("TodoApp");

    //deleteMany
//    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res)=>{
//        console.log('Todos deleted',res)
   
//    }).catch((err)=>{
//        console.log("error ocured: ",err)
//    })


   //deleteOne it deletes only first come row
//    db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res)=>{
//     console.log('Todos deleted',res)

// }).catch((err)=>{
//     console.log("error ocured: ",err)
// })

//findOneAndDelete
db.collection('Todos').findOneAndDelete({completed: false}).then((res)=>{
    console.log('Todos deleted',res)

}).catch((err)=>{
    console.log("error ocured: ",err)
})



   // client.close();
});