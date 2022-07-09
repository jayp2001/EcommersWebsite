const express = require('express')
const router = express.Router();
let CartList = require('../model/cartList.model');

const {addCartList, getCartList, deleteCart ,updateAddQuantity, updateRemoveQuantity} = require('../controller/cartList.controller');
const { route } = require('./auth');

router.post('/addCartList',addCartList);
router.get('/getCartList',getCartList);
router.post('/deleteCart',deleteCart,getCartList);
router.post('/updateAddQuantity',updateAddQuantity,getCartList);
router.post('/updateRemoveQuantity',updateRemoveQuantity,getCartList);

module.exports = router;