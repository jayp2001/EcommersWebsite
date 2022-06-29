const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fashionProductSchema = new Schema({
    name : {
        required: true,
        type: String,
        trim: true,
        minlength: 3,
    },
    brandName : {
        required: true,
        type: String,
        trim: true,
        minlength: 3,
    },
    discription : {
        required: true,
        type: String,
    },
    size : []
    ,
    status : {
        required: true,
        type: String,
        trim: true,
    },
    type : {
        required: true,
        type: String,
        trim: true,
    },
    price : {
        required : true,
        type : Number,
    },
    quantity : {
        required : true,
        type : Number,
    },
    productImage : {
        URL:{
            type: String,
        },
        id:{
            type: String,
            required : true,
        }
    }
    },
{
    timestamps: true,
});

const FashionProduct = mongoose.model('FashionProduct', fashionProductSchema);

module.exports = FashionProduct;