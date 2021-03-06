let CartList = require('../model/cartList.model');
let ElectricProduct = require('../model/electricProduct.model');
let FashionProduct = require('../model/fashionProduct.model');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

  // Add To Cart

const addCartList = asyncHandler(async (req, res) => {

  let token;
  const cookie = req.cookies;
  console.log(req.cookies)
  if(cookie){
    try{
      console.log(cookie)
      token = cookie.token;
      const decoded = jwt.verify(token,process.env.JWT_SECRET)
      const userId = decoded.stringToken.split('/')[0]
      console.log(userId)

      const {productId ,quantity , type} = req.body
  
    if (!userId || !productId || !quantity || !type) {
      res.status(400)
      throw new Error('Please add all fields')
    }
    var cartListData;
    // const existingData = await CartList.find({userId:userId})  
    // console.log(existingData)  
    // if(existingData){
    //   console.log(existingData.quantity)
    //   existingData.quantity += 1;
    //   cartList = existingData.save()
    //         .then(() => res.json('Product Update Successfully'))
    //         .catch(err => res.status(400).json('Error: '+err));
    // }
    // else{
    //   cartList = await CartList.create({
    //     userId ,productId ,quantity
    //   })
    // }
    var product;
    if(type==="electric"){
      product = await ElectricProduct.findById(productId);
    }
    else if(type==="fashion"){
      product = await FashionProduct.findById(productId);
    }
    
    const existingData = await CartList.find({userId:userId , productId:productId}) 
    .then(data => {
      console.log(">>>>>",data[0]);
      if (!data[0]){
        console.log(data)
        cartListData =  CartList.create({
          userId ,productId ,quantity
        })
        if (cartListData) {
         res.status(201).json({
           _id: cartListData._id,
         })
       } 
      }
      else if(product && data[0] && ((data[0].quantity !== product.quantity) || (quantity <= product.quantity - data[0].quantity))){
          console.log(">>>>>",data);
          const update = {quantity:data[0].quantity += quantity};
            data[0].updateOne(update)
            .then(() => res.json('Product Update Successfully'))
            .catch(err => res.status(400).json('Error: '+err));
        }
    })
    // Create user
   
  
    // if (cartListData) {
    //   res.status(201).json({
    //     _id: cartListData._id,
    //   })
    // } 
    }
    catch (error) {
      console.log(error);
      res.status(200).json("login");
    }
  }
})

// Display Cart

  const getCartList = asyncHandler(async (req,res) =>{

    let token;
    const cookie = req.cookies;
    if(cookie){
      try{
        token = cookie.token;
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const userId = decoded.stringToken.split('/')[0]

        if (!userId) {
          res.status(400)
          throw new Error('UserId Not Found')
        }
        const data =await CartList.find({userId:userId})
        // res.status(200).json(data);

        if(data[0]){
           console.log(!!data[0])
          var productIdList = [];

          data.forEach(element => {
             const id =element.productId.toHexString()
             console.log(id)
            productIdList.push(element.productId.toHexString());
          });
          console.log(productIdList)
          const ListOfElectricProduct = await ElectricProduct.find().where('_id').in(productIdList).exec();
          const ListOfFashionProduct = await FashionProduct.find().where('_id').in(productIdList).exec();

          const FinalProductList = ListOfElectricProduct.concat(ListOfFashionProduct);
          
          data.forEach(cartProduct =>{
            const index = FinalProductList.findIndex(a => a._id.toHexString() === cartProduct.productId.toHexString());
            
            console.log("><><><><>",FinalProductList[index])
            FinalProductList[index].quantity = cartProduct.quantity;
            console.log(index);
          }) 
          // console.log(">>>>",FinalProductList);
          // data.forEach(cartProduct =>{
          //   const index = FinalProductList.filter((a,index) => {
          //     if(a._id === cartProduct.productId){
          //       return index;
          //   }
          // });
          //   console.log(index);
          // }) 

          if(FinalProductList){
            // console.log(FinalProductList)
            res.status(200).json(FinalProductList)
          }
          else
          res.status(200).json("no data found");
        }
        else
          res.status(200).send([]);
          
      }
      catch (error) {
        console.log(error);
        res.status(200).json("UserId Not Get");
      }
    }
  })

  //Remove From Cart

  const deleteCart = asyncHandler(async (req,res,next) => {
    let token;
    const cookie = req.cookies;
    if(cookie){
      try{
        token = cookie.token;
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const userId = decoded.stringToken.split('/')[0]
        const {productId} = req.body

        if (!userId) {
          res.status(400)
          throw new Error('UserId Not Found')
        }
        await CartList.deleteOne({userId:userId,productId:productId})
            .then((res) => next())
            .catch(err => {res.status(400).json('Error: '+err),next()});
            // next()
      }
      catch(error){
        throw new Error('Unsuccessfull')
      }     
    }   
    },getCartList);

    //Edit Cart Quantity
      //Add Quantity
    const updateAddQuantity = asyncHandler(async(req,res,next)=>{
      let token;
      const cookie = req.cookies;
      console.log(req.cookies);
      try{
        if(cookie){
          token = cookie.token
          const decoded = jwt.verify(token,process.env.JWT_SECRET)
          const userId = decoded.stringToken.split('/')[0]
          const {productId} = req.body  
          var productData = await ElectricProduct.find({_id:productId});
          if(!productData[0]){
            productData = await FashionProduct.find({_id:productId});
          }
          
          const exixstingData = await CartList.find({userId:userId , productId:productId}) 
            .then(data => {
              console.log(">>>>>",data);
              console.log(productData[0].quantity)
              if (productData[0].quantity <= data[0].quantity){
                console.log("else")
                next()
                return null;
              }
              else if(productData[0].quantity > data[0].quantity){
                  console.log(">>>>>",data[0].quantity);
                  const update = {quantity:data[0].quantity + 1};
                    data[0].updateOne(update)
                    .then((res) => next())
                    .catch(err => res.status(400).json('Error: '+err));
                }
                else{
                  res.status(400).json('Error: max limit reached')
                }
            })        
         }
       }
       catch(error){
        throw new Error(error)
    }
    }
    ,getCartList)

    //Remove Quantity

    const updateRemoveQuantity = asyncHandler(async(req,res,next)=>{
      let token;
      const cookie = req.cookies;
      console.log(req.cookies);
      try{
        if(cookie){
          token = cookie.token
          const decoded = jwt.verify(token,process.env.JWT_SECRET)
          const userId = decoded.stringToken.split('/')[0]
          const {productId} = req.body  
          var productData = await ElectricProduct.find({_id:productId});
          if(!productData[0]){
            productData = await FashionProduct.find({_id:productId});
          }
          const exixstingData = await CartList.find({userId:userId , productId:productId}) 
            .then(data => {
              // console.log(">>>>>",data[0]);
              console.log(productData[0].quantity)
                    if(data[0].quantity >= 2){
                      console.log(">>>>>",data);
                      const update = {quantity:data[0].quantity - 1};
                        data[0].updateOne(update)
                        .then((res) => next())
                        .catch(err => res.status(400).json('Error: '+err));
                  }else{
                    res.status(200).json(1);
                  }
            })        
         }
       }
       catch(error){
        throw new Error(error)
    }
    }
    ,getCartList)


 module.exports = {
    addCartList,getCartList,deleteCart,updateAddQuantity,updateRemoveQuantity
 }     