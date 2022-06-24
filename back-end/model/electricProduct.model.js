const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const electricProductSchema = new Schema({
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
    feature : {
        required: true,
        type: String,
        trim: true,
        minlength: 3,
    },
    discription : {
        required: true,
        type: String,
    },
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
    },
{
    timestamps: true,
});

const ElectricProduct = mongoose.model('ElectricProduct', electricProductSchema);

module.exports = ElectricProduct;