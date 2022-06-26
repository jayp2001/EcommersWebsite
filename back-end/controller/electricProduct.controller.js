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

  //Delete Electric Product

  const deleteElectricProduct = asyncHandler(async (req,res,next) => {
    try{
      await ElectricProduct.findByIdAndDelete(req.params.id)
      //   .then(() => {res.json('Product Deleted Sucessfully')
      // })
      //   .catch(err => res.status(400).json('Error: '+err));
    
        next()
    }
    catch(error){
      throw new Error('Unsuccessfull')
    }
   
});

  //Get Electric Product

  const getElectricProduct = asyncHandler(async (req,res) =>{
    const data =await ElectricProduct.find()
    res.status(200).json(data);
    // .then(electricProduct => res.json(electricProduct))
    // .catch(err => res.status(400).json('Error: ' + err));
  })
 
  //UPDATE Electric Product

  const  updateElectricProduct = asyncHandler(async(req,res)=>{
    await ElectricProduct.findById(req.params.id)
    .then(updateElectricProduct =>{
      updateElectricProduct.name = req.body.name ? req.body.name : updateElectricProduct.name;
      updateElectricProduct.brandName = req.body.brandName ? req.body.brandName : updateElectricProduct.brandName;
      updateElectricProduct.feature = req.body.feature ? req.body.feature : updateElectricProduct.feature;
      updateElectricProduct.discription = req.body.discription ? req.body.discription : updateElectricProduct.discription;
      updateElectricProduct.status = req.body.status ? req.body.status : updateElectricProduct.status;
      updateElectricProduct.type = req.body.type ? req.body.type : updateElectricProduct.type;
      updateElectricProduct.price = req.body.price ? req.body.price : updateElectricProduct.price;
      updateElectricProduct.quantity = req.body.quantity ? req.body.quantity : updateElectricProduct.quantity;

      updateElectricProduct.save()
        .then(() => res.json('Product Update Successfully'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
  })



  module.exports = {
    addElectricProduct,getElectricProduct,deleteElectricProduct,updateElectricProduct
  }