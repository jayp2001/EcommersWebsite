let User = require('../model/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body
  
    if (!userName || !email || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Check if user exists
    const userExists = await User.findOne({ email })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    // Hash password
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)
  
    // Create user
    const user = await User.create({
        userName,
      email,
      password,
    })
  
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
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
    const token = await generateToken(user._id);
    // res.header('Access-Control-Allow-Credentials', true);
    res.cookie("token", token, {
        domain: 'localhost',
        sameSite: 'lax',
        secure: true,
        expires: new Date(Date.now() + 25892000000),
        // httpOnly: true
      });

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }

})

const generateToken = async (id) => {
    return jwt.sign({ id }, "123",)
  }

  module.exports = {
    loginUser,
    registerUser
  }