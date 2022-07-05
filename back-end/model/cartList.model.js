const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartListSchema = new Schema({
    userId : {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    quantity:{
        type: Number,
    }
},
{
    timestamps: true,
});

const CartList = mongoose.model('CartList', cartListSchema);

module.exports = CartList;