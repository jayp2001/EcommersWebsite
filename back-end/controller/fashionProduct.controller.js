let FashionProduct = require('../model/fashionProduct.model');
const asyncHandler = require('express-async-handler')
  


// const addFashionProduct = asyncHandler(async (req, res) => {
//     const {name ,brandName ,discription ,size ,status ,type ,price ,quantity } = req.body
  
//     if (!name || !brandName || !discription || !size || !status || !type || !price || !quantity) {
//       res.status(400)
//       throw new Error('Please add all fields')
//     }
  
//     // Create user
//     const fashionProduct = await FashionProduct.create({
//         name ,brandName ,discription ,size ,status ,type ,price ,quantity
//     })
  
//     if (fashionProduct) {
//       res.status(201).json({
//         _id: fashionProduct._id,
//       })
//     } else {
//       res.status(400)
//       throw new Error('Unsuccessfull')
//     }
//   })


  //Delete Fashion Product

//   const deleteFashionProduct = asyncHandler(async (req,res,next) => {
//     try{
//       await FashionProduct.findByIdAndDelete(req.params.id)
//       //   .then(() => {res.json('Product Deleted Sucessfully')
//       // })
//       //   .catch(err => res.status(400).json('Error: '+err));
    
//         next()
//     }
//     catch(error){
//       throw new Error('Unsuccessfull')
//     }
// });

    //Get Fashion Product

const getFashionProduct = asyncHandler(async (req,res) =>{
    const data =await FashionProduct.find()
    res.status(200).json(data);
    // .then(electricProduct => res.json(electricProduct))
    // .catch(err => res.status(400).json('Error: ' + err));
  })

  const getFashionProductById = asyncHandler(async (req,res) =>{
    const data =await FashionProduct.findById(req.params.id)
    res.status(200).json(data);
    // .then(electricProduct => res.json(electricProduct))
    // .catch(err => res.status(400).json('Error: ' + err));
  })

  const getNumberofFashionProduct = asyncHandler(async (req,res) =>{
    const data =await FashionProduct.find()
    res.status(200).json(data.length);
  })

    //UPDATE Fashion Product

    const  updateFashionProduct = asyncHandler(async(req,res)=>{
        await FashionProduct.findById(req.params.id)
        .then(updateFashionProduct =>{
          updateFashionProduct.name = req.body.name ? req.body.name : updateFashionProduct.name;
          updateFashionProduct.brandName = req.body.brandName ? req.body.brandName : updateFashionProduct.brandName;
          updateFashionProduct.size = req.body.size ? req.body.size : updateFashionProduct.size;
          updateFashionProduct.discription = req.body.discription ? req.body.discription : updateFashionProduct.discription;
          updateFashionProduct.status = req.body.status ? req.body.status : updateFashionProduct.status;
          updateFashionProduct.type = req.body.type ? req.body.type : updateFashionProduct.type;
          updateFashionProduct.price = req.body.price ? req.body.price : updateFashionProduct.price;
          updateFashionProduct.quantity = req.body.quantity ? req.body.quantity : updateFashionProduct.quantity;
    
          updateFashionProduct.save()
            .then(() => res.json('Product Update Successfully'))
            .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
      })

      //Pagination

  const getAllFashionProduct = async(req,res,next) => {
    try{
    const { page , limit} = req.params; 
    const data = await FashionProduct.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    res.status(200).json({total : data.length,data});
    }
    catch(error){
      console.log(err);
      res.status(500).json({
        error: err
      })
    }
  }

  // Max 3 Value find 

  const getMaxthreeFashionProductValue = async(req,res) =>{
    try{
      const data = await FashionProduct.find().sort("-price").limit(3);
      res.status(200).json({data});
    }catch(error){
      res.status(500).json({
        error: err
      })
    }
  }
 
  module.exports = {
    getFashionProduct,updateFashionProduct,getFashionProductById,getAllFashionProduct,getNumberofFashionProduct,getMaxthreeFashionProductValue
  }