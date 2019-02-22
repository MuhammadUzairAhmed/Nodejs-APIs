var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// module.exports = {
//     mongoose: mongoose
// }

//or similar to

module.exports = 
{
    mongoose
}