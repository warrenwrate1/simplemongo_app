const mongoose = require('mongoose');

var User  = mongoose.model('User', {
    email:{
        type: String,
        minlength: 1,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});

module.exports ={
    User: User
}

