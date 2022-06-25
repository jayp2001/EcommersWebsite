const express = require('express')
const router = express.Router();
let ElectricProduct = require('../model/electricProduct.model');

const {addElectricProduct} = require('../controller/electricProduct.controller');
const  {addFashionProduct } = require('../controller/fashionProduct.controller');

router.post('/addElectricProduct', addElectricProduct)

router.post('/addFashionProduct',addFashionProduct);

module.exports = router;