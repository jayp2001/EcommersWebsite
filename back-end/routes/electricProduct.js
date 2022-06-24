const express = require('express')
const router = express.Router();
let ElectricProduct = require('../model/electricProduct.model');

const {addElectricProduct} = require('../controller/electricProduct.controller');

router.post('/addElectricProduct', addElectricProduct)

module.exports = router;