const express = require('express')
const router = express.Router();
let CartList = require('../model/cartList.model');

const {addCartList, getCartList} = require('../controller/cartList.controller');

router.post('/addCartList',addCartList);
router.get('/getCartList',getCartList);

module.exports = router;