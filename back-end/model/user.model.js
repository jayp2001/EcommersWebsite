const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName : {
        required: true,
        type: String,
        unique: true,
        trim: true,
        minlength: 3,
    },
    email : {
        type: String,
        unique:true,
        required: true
    },
    password : {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;