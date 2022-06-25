let FashionProduct = require('../model/fashionProduct.model');
const asyncHandler = require('express-async-handler')
  


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

  //Get Fashion Product

  const getFashionProduct =(req,res)=>{
    FashionProduct.find()
    .then(fashionProduct => res.json(fashionProduct))
    .catch(err => res.status(400).json('Error: ' + err));
  }

  //Delete Fashion Product

 const deleteFashionProduct = (req,res) => {
    FashionProduct.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product Deleted Sucessfully'))
    .catch(err => res.status(400).json('Error: '+err));
 };
 
  module.exports = {
    addFashionProduct,getFashionProduct,deleteFashionProduct
  }