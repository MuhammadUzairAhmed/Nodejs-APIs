var mongoose = require('mongoose');

var User = mongoose.model('user',{
    email:
    {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports={User}