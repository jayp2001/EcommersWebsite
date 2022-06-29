const express = require('express')
const router = express.Router();
const { json } = require('express');
const Multer = require('multer');
var {google} = require('googleapis');
let ElectricProduct = require('../model/electricProduct.model');
const asyncHandler = require('express-async-handler');
const fs = require('fs')

const {addElectricProduct, getElectricProduct, deleteElectricProduct, updateElectricProduct,getElectricProductById} = require('../controller/electricProduct.controller');
const  {addFashionProduct, getFashionProduct, deleteFashionProduct, updateFashionProduct ,getFashionProductById} = require('../controller/fashionProduct.controller');

//Electric Product

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


const authenticateGoogle = () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: `/Users/vikalp/Ecommerce/EcommersWebsite/back-end/service-account.json`,
    scopes: "https://www.googleapis.com/auth/drive",
  });
  return auth;
};

 const multer = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `/Users/vikalp/Ecommerce/EcommersWebsite/uploads`);
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});


    const uploadToGoogleDrive = async (file, auth) => {
        const fileMetadata = {
          name: file.originalname,
          parents: ["1jYhlqJGrNVDL-6Ku2xmJwb4P7-NhaxFr"], // Change it according to your desired parent folder id
        };
      
        const media = {
          mimeType: file.mimetype,
          body: fs.createReadStream(file.path),
        };
      
        const driveService = google.drive({ version: "v3", auth });
      
        const response = await driveService.files.create({
          requestBody: fileMetadata,
          media: media,
          fields: "id",
        });
        return response;
      };
    //   router.post('/addElectricProduct', addElectricProduct);
      router.post("/addElectricProduct", multer.single("file"), async (req, res, next) => {
        const {name ,brandName ,feature ,discription ,status ,type ,price ,quantity} = req.body
  
    if (!name || !brandName || !feature || !discription || !status || !type || !price || !quantity) {
      res.status(400)
      throw new Error('Please add all fields')
    }
    let driveId;
        let driveImgUrl;
        try {
          if (!req.file) {
            res.status(400).send("No file uploaded.");
            return;
          }
        
        const auth = authenticateGoogle();
        const response = await uploadToGoogleDrive(req.file, auth);
        driveId = response.data.id;
        driveImgUrl = `https://drive.google.com/uc?export=view&id=${driveId}`;
        //   deleteFile(req.file.path);
        //   res.status(200).json( response.data.id );

        } catch (err) {
          console.log(err);
      }
    // Create user
    const productImage = {
        URL: driveImgUrl,
        id: driveId
    }
    console.log(productImage)
    // const electricProduct = await ElectricProduct.create({productImage})

    const electricProduct = await ElectricProduct.create({
        name ,brandName ,feature ,discription ,status ,type ,price ,quantity,productImage
      })
  
    if (electricProduct) {
      res.status(201).json({
        _id: electricProduct._id,
        url:electricProduct.productImage.URL
      })
    } else {
      res.status(400)
      throw new Error('Unsuccessfull')
    }
    
    });
        

module.exports = router;
