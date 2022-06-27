const express = require('express')
const router = express.Router();
let ElectricProduct = require('../model/electricProduct.model');

const {addElectricProduct, getElectricProduct, deleteElectricProduct, updateElectricProduct,getElectricProductById} = require('../controller/electricProduct.controller');
const  {addFashionProduct, getFashionProduct, deleteFashionProduct, updateFashionProduct ,getFashionProductById} = require('../controller/fashionProduct.controller');

//Electric Product
router.post('/addElectricProduct', addElectricProduct);
router.get('/getElectricProduct',getElectricProduct);
router.get('/getElectricProduct/:id',getElectricProductById);
router.delete('/deleteElectricProduct/:id',deleteElectricProduct,getElectricProduct);
router.post('/updateElectricProduct/:id',updateElectricProduct);


//Fashion Product
router.post('/addFashionProduct',addFashionProduct);
router.get('/getFashionProduct',getFashionProduct);
router.get('/getFashionProduct/:id',getFashionProductById);
router.delete('/deleteFashionProduct/:id',deleteFashionProduct,getFashionProduct);
router.post('/updateFashionProduct/:id',updateFashionProduct);


module.exports = router;
