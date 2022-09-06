const express = require('express')
const router = express.Router();
const { json } = require('express');
const Multer = require('multer');
var {google} = require('googleapis');
let ElectricProduct = require('../model/electricProduct.model');
let FashionProduct = require('../model/fashionProduct.model');
const asyncHandler = require('express-async-handler');
const fs = require('fs')

const {getMaxthreeElectricProductValue, getElectricProduct, updateElectricProduct,getElectricProductById, getAllElectricProduct ,getNumberofElectricProduct, getPriseSort} = require('../controller/electricProduct.controller');
const  {getMaxthreeFashionProductValue ,getFashionProduct, updateFashionProduct ,getFashionProductById, getAllFashionProduct, getNumberofFashionProduct} = require('../controller/fashionProduct.controller');

//Electric Product

router.get('/getElectricProduct',getElectricProduct);
router.get('/getElectricProduct/:id',getElectricProductById);
router.post('/updateElectricProduct/:id',updateElectricProduct);
router.get('/getAllElectricProduct/:page/:limit',getAllElectricProduct);
router.get('/getNumberofElectricProduct',getNumberofElectricProduct);
router.post('/getPriseSort/:page/:limit',getPriseSort);
router.get('/getMaxthreeElectricProductValue',getMaxthreeElectricProductValue);



//Fashion Product

router.get('/getFashionProduct',getFashionProduct);
router.get('/getFashionProduct/:id',getFashionProductById);
router.post('/updateFashionProduct/:id',updateFashionProduct);
router.get('/getAllFashionProduct/:page/:limit',getAllFashionProduct);
router.get('/getNumberofFashionProduct',getNumberofFashionProduct)
router.get('/getMaxthreeFashionProductValue',getMaxthreeFashionProductValue);


//Electric Product Add With Image in Google Drive

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

    //Fsshion Product Add With Image in Google Drive
  
  
      const uploadToGoogleDriveFashion = async (file, auth) => {
          const fileMetadata = {
            name: file.originalname,
            parents: ["13qALtoo7I8_-I-4PJBq_V0IkYDRxuKnm"], // Change it according to your desired parent folder id
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

        router.post("/addFashionProduct", multer.single("file"), async (req, res, next) => {
          const {name ,brandName ,discription ,size ,status ,type ,price ,quantity} = req.body
    
      if (!name || !brandName || !discription || !size || !status || !type || !price || !quantity) {
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
          const response = await uploadToGoogleDriveFashion(req.file, auth);
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
  
      const fashionProduct = await FashionProduct.create({
        name ,brandName ,discription ,size ,status ,type ,price ,quantity,productImage
        })
    
      if (fashionProduct) {
        res.status(201).json({
          _id: fashionProduct._id,
          url:fashionProduct.productImage.URL
        })
      } else {
        res.status(400)
        throw new Error('Unsuccessfull')
      }
      
      });

      //Search By Name

      router.get("/SearchField", async (req, res, next)=>{
     const SearchField = req.query.name;
    ElectricProduct.find({name: {$regex: SearchField, $options: '$i'},brandName: {$regex: SearchField, $options: '$i'}})
      .then(data=>{
        res.send(data);
      });
});

//DELETE FILE IN GOOGLE DRIVE

router.delete('/deleteFashionProduct/:id', asyncHandler(async (req,res,next) => {
    try{
       const res = await FashionProduct.findByIdAndDelete(req.params.id)
      //   .then(() => {res.json('Product Deleted Sucessfully')
      // })
      //   .catch(err => res.status(400).json('Error: '+err));
      if(res){
        console.log(req.body.imgId)
        const imgRes =  await deleteFile(req.body.imgId)
            if(imgRes && res)
            {
                next()
            }
      }
      
       
    }
    catch(error){
      throw new Error(error)
    }
}),getFashionProduct);

router.delete('/deleteElectricProduct/:id', asyncHandler(async (req,res,next)=>{
    try{
        const res = await ElectricProduct.findByIdAndDelete(req.params.id)

        if(res){
            console.log(req.body.imgId)
            const imgRes = await deleteFile(req.body.imgId)
              if(imgRes && res)
              {
                next()
              }
        }
    }
    catch(error){
        throw new Error(error)
    }
}),getElectricProduct);

        
const deleteFile = asyncHandler(async (fileId) =>{
    const auth = authenticateGoogle();
    const driveService = google.drive({ version: "v3", auth });

    const response = await driveService.files.delete({
        fileId : fileId
      });
      return response;
})


        
          

module.exports = router;
