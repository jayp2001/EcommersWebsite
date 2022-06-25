let ElectricProduct = require('../model/electricProduct.model');
const asyncHandler = require('express-async-handler');
const { json } = require('express');

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

  // Get Electric Product

  //Delete Electric Product

  const deleteElectricProduct = (req,res) => {
    ElectricProduct.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product Deleted Sucessfully'))
    .catch(err => res.status(400).json('Error: '+err));
};

  const getElectricProduct = asyncHandler(async (req,res) =>{
    const data =await ElectricProduct.find()
    res.status(200).json(data);
    // .then(electricProduct => res.json(electricProduct))
    // .catch(err => res.status(400).json('Error: ' + err));
  })
 
  module.exports = {
    addElectricProduct,getElectricProduct,deleteElectricProduct
  }