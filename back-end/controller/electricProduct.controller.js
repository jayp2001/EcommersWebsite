let ElectricProduct = require('../model/electricProduct.model');
const asyncHandler = require('express-async-handler');
const { json } = require('express');

// const authenticateGoogle = () => {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: `/Users/vikalp/Ecommerce/EcommersWebsite/back-end/service-account.json`,
//     scopes: "https://www.googleapis.com/auth/drive",
//   });
//   return auth;
// };

//  const multer = Multer({
//   storage: Multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, `/Users/vikalp/Ecommerce/EcommersWebsite/uploads`);
//     },
//     filename: function (req, file, callback) {
//       callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     },
//   }),
//   limits: {
//     fileSize: 5 * 1024 * 1024,
//   },
// });

// const uploadToGoogleDrive = async (file, auth) => {
//   const fileMetadata = {
//     name: file.originalname,
//     parents: ["1jYhlqJGrNVDL-6Ku2xmJwb4P7-NhaxFr"], // Change it according to your desired parent folder id
//   };

//   const media = {
//     mimeType: file.mimetype,
//     body: fs.createReadStream(file.path),
//   };

//   const driveService = google.drive({ version: "v3", auth });

//   const response = await driveService.files.create({
//     requestBody: fileMetadata,
//     media: media,
//     fields: "id",
//   });
//   return response;
// };


  //Delete Electric Product

//   const deleteElectricProduct = asyncHandler(async (req,res,next) => {
//     try{
//       await ElectricProduct.findByIdAndDelete(req.params.id)
//       //   .then(() => {res.json('Product Deleted Sucessfully')
//       // })
//       //   .catch(err => res.status(400).json('Error: '+err));
    
//         next()
//     }
//     catch(error){
//       throw new Error('Unsuccessfull')
//     }
   
// });

  //Get Electric Product

  const getElectricProduct = asyncHandler(async (req,res) =>{
    const data =await ElectricProduct.find()
    res.status(200).json(data);
    // .then(electricProduct => res.json(electricProduct))
    // .catch(err => res.status(400).json('Error: ' + err));
  })
  const getElectricProductById = asyncHandler(async (req,res) =>{
    const data =await ElectricProduct.findById(req.params.id)
    res.status(200).json(data);
    // .then(electricProduct => res.json(electricProduct))
    // .catch(err => res.status(400).json('Error: ' + err));
  })

  const getNumberofElectricProduct = asyncHandler(async (req,res) =>{
    const data =await ElectricProduct.find()
    res.status(200).json(data.length);
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
   
  //Pagination

  const getAllElectricProduct = async(req,res,next) => {
    try{
      console.log(">>",req.params);
    const { page ,limit } = req.params; 
    const data = await ElectricProduct.find()
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

  //prise Filter

  const getPriseSort = async(req,res) =>{
    try{
      const {minPrice,maxPrice} =req.body
      const { page ,limit } = req.params;
      const temp = await ElectricProduct.find({price:{$gte:minPrice, $lte:maxPrice}})
      const data = await ElectricProduct.find({price:{$gte:minPrice, $lte:maxPrice}})
      .limit(limit * 1)
      .skip((page - 1) * limit);
      res.status(200).json({total : temp.length,data});
    }
    catch(error){
      res.status(500).json({
        error: err
      })
    }
  }

  module.exports = {
    getElectricProduct,updateElectricProduct,getElectricProductById,getAllElectricProduct,getNumberofElectricProduct,getPriseSort
  }