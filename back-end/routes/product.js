const express = require('express')
const router = express.Router();
let ElectricProduct = require('../model/electricProduct.model');

const {addElectricProduct, getElectricProduct} = require('../controller/electricProduct.controller');
const  {addFashionProduct, getFashionProduct} = require('../controller/fashionProduct.controller');

//Electric Product
router.post('/addElectricProduct', addElectricProduct);
router.get('/getElectricProduct',getElectricProduct);

//Fashion Product
router.post('/addFashionProduct',addFashionProduct);
router.get('/getFashionProduct',getFashionProduct);



module.exports = router;