const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

router.route('/myRights').get(asyncHandler(async(req,res)=>{
    let token;
    const cookie = req.cookies;
  if (
    cookie
  ) {
    try {
      // Get token from header
      token = cookie.token

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const rights = decoded.stringToken.split('/')[1]
      // Get user from the token
    //   req.user = await User.findById(decoded.id).select('-password')

    if(rights === "ADMIN"){
        res.status(201).json("982531")
    }
    else{
        res.status(201).json("9825")
    }
      console.log(rights)
    } catch (error) {
      console.log(error)
      res.status(200).json("login")
    //   throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(200).json("login")
    // throw new Error('Not authorized, no token')
  }
}))

module.exports = router;