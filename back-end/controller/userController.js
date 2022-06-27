let User = require('../model/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const getUser =(req,res)=>{

  User.find()
  .then(users => res.json(users))
  
// else{
//   res.status(400)
//       throw new Error('User')
// }
}

const registerUser = asyncHandler(async (req, res) => {
    const formData = req.body
    // const { userName, email, password } = req.body
  
    if (!formData.userName || !formData.email || !formData.password || !formData.address) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Check if user exists
    const email = formData.email
    const userExists = await User.findOne({ email })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    // Hash password
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)
  
    // Create user
    const user = await User.create(formData)
    // if(!formData.rights){
    
    // }
  //   else if (formData.rights) {
  //     const user = await User.create({
  //       userName,
  //     email,
  //     password,
  //   })
  // }
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: await generateToken(user._id,user.rights),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })

const loginUser = asyncHandler(async (req,res) =>{
    // console.log(">>>>")
        // res.json("success")
    const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && password === user.password) {
    const token = await generateToken(user._id,user.rights);
    res.header('Access-Control-Allow-Credentials', true);
    res.cookie("token", token, {
        domain: 'localhost',
        sameSite: 'lax',
        secure: true,
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });
    // res.sendRedirect('/cart')
    // res.edirect()
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: await generateToken(user._id,user.rights),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }

})

const generateToken = async (id,rights) => {
  const stringToken = `${id}/${rights}`
  console.log(">>>",stringToken)
    return jwt.sign( {stringToken}, "123",)
    // return console.log(`${id}/${rights}`)
  }

  module.exports = {
    loginUser,
    registerUser,getUser
  }