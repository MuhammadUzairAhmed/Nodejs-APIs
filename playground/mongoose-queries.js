const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = "5c6d09e981a4bc2e68d6397e";

Todo.findOne({
    _id: id
}).then((todo)=> {
    console.log("findOne ",todo)
})

Todo.findById(id).then((todo)=> {
    console.log("findById ",todo)
})
