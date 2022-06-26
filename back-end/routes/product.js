const express = require('express')
const router = express.Router();
let ElectricProduct = require('../model/electricProduct.model');

const {addElectricProduct, getElectricProduct, deleteElectricProduct} = require('../controller/electricProduct.controller');
const  {addFashionProduct, getFashionProduct, deleteFashionProduct} = require('../controller/fashionProduct.controller');

//Electric Product
router.post('/addElectricProduct', addElectricProduct);
router.get('/getElectricProduct',getElectricProduct);
router.delete('/deleteElectricProduct/:id',deleteElectricProduct,getElectricProduct);


//Fashion Product
router.post('/addFashionProduct',addFashionProduct);
router.get('/getFashionProduct',getFashionProduct);
router.delete('/deleteFashionProduct/:id',deleteFashionProduct);



module.exports = router;
