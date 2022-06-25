let FashionProduct = require('../model/fashionProduct.model');
const asyncHandler = require('express-async-handler')

const getElectricProduct =(req,res)=>{

  FashionProduct.find()
  .then(fashionProduct => res.json(fashionProduct))
  
// else{
//   res.status(400)
//       throw new Error('User')
// }
}

const addFashionProduct = asyncHandler(async (req, res) => {
    const {name ,brandName ,discription ,size ,status ,type ,price ,quantity } = req.body
  
    if (!name || !brandName || !discription || !size || !status || !type || !price || !quantity) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Create user
    const fashionProduct = await FashionProduct.create({
        name ,brandName ,discription ,size ,status ,type ,price ,quantity
    })
  
    if (fashionProduct) {
      res.status(201).json({
        _id: fashionProduct._id,
      })
    } else {
      res.status(400)
      throw new Error('Unsuccessfull')
    }
  })
 
  module.exports = {
    addFashionProduct
  }