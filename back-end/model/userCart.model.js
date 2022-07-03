const mongoose = require('mongoose');
const CartList = require('./cartList.model');

const Schema = mongoose.Schema;

const userCartSchema = new Schema({
    userId : {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    products:[
        {
            cartListID:{
                type: mongoose.Schema.Types.ObjectId,
            }
        }
    ]
    
},
{
    timestamps: true,
});

const UserCart = mongoose.model('UserCart', userCartSchema);

module.exports = UserCart;