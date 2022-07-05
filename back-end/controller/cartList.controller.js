let CartList = require('../model/cartList.model')
const asyncHandler = require('express-async-handler')

  // Add To Cart

const addCartList = asyncHandler(async (req, res) => {
        const {userId,productId,quantity} = req.body
        console.log(req.body)
        if (!userId || !productId || !quantity) {
          res.status(400)
          throw new Error('Please add all fields')
        }
      
        const cartList = await CartList.create({
            userId,productId,quantity
        })
      
        if (cartList) {
          res.status(201).json({
            _id: cartList._id,
          })
        } else {
          res.status(400)
          throw new Error('Unsuccessfull')
        }
      })

 module.exports = {
    addCartList
 }     