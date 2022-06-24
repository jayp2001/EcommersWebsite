let ElectricProduct = require('../model/electricProduct.model');
const asyncHandler = require('express-async-handler')

const getElectricProduct =(req,res)=>{

  electricProduct.find()
  .then(electricProduct => res.json(electricProduct))
  
// else{
//   res.status(400)
//       throw new Error('User')
// }
}

const addElectricProduct = asyncHandler(async (req, res) => {
    const {name ,brandName ,feature ,discription ,status ,type ,price ,quantity } = req.body
  
    if (!name || !brandName || !feature || !discription || !status || !type || !price || !quantity) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Create user
    const electricProduct = await ElectricProduct.create({
        name ,brandName ,feature ,discription ,status ,type ,price ,quantity
    })
  
    if (electricProduct) {
      res.status(201).json({
        _id: electricProduct._id,
      })
    } else {
      res.status(400)
      throw new Error('Unsuccessfull')
    }
  })

  // Check for user email
 
  module.exports = {
    addElectricProduct
  }