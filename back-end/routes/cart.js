const express = require('express')
const router = express.Router();
let CartList = require('../model/cartList.model');

const {addCartList} = require('../controller/cartList.controller');

router.post('/addCartList',addCartList);

module.exports = router;