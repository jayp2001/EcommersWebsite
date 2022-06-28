const express = require('express')
const router = express.Router();
const { json } = require('express');
// const multer = require('multer');
let ElectricProduct = require('../model/electricProduct.model');

const {addElectricProduct, getElectricProduct, deleteElectricProduct, updateElectricProduct,getElectricProductById} = require('../controller/electricProduct.controller');
const  {addFashionProduct, getFashionProduct, deleteFashionProduct, updateFashionProduct ,getFashionProductById} = require('../controller/fashionProduct.controller');

//Electric Product
router.post('/addElectricProduct', addElectricProduct);
router.get('/getElectricProduct',getElectricProduct);
router.get('/getElectricProduct/:id',getElectricProductById);
router.delete('/deleteElectricProduct/:id',deleteElectricProduct,getElectricProduct);
router.post('/updateElectricProduct/:id',updateElectricProduct);


//Fashion Product
router.post('/addFashionProduct',addFashionProduct);
router.get('/getFashionProduct',getFashionProduct);
router.get('/getFashionProduct/:id',getFashionProductById);
router.delete('/deleteFashionProduct/:id',deleteFashionProduct,getFashionProduct);
router.post('/updateFashionProduct/:id',updateFashionProduct);

// const storage = multer.diskStorage({
//     destination: (req, file ,callback) =>{
//        callback(null, "https://drive.google.com/drive/folders/1Y3Ak5BG_FgoSwP9tuLjI3Tjq4HRpMYWL");
//     },
//     filename: (req, file ,callback) =>{
//       callback(null, file.originalname);
//     }
//   })
  
//    const upload = multer({storage: storage});

// router.post('/image',upload.single('productImage'),(req,res) =>{
//     const newArticle = new ElectricProduct({
//         productImage: req.file.originalname
//     });

//     newArticle
//         .save()
//         .then(() =>res.json("new article posted"));
//         // .catch((err) => res.status(400).json(`error : ${err}`));
// });

module.exports = router;
