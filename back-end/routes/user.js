const express = require('express')
const router = express.Router();
let user = require('../model/user.model');

const {loginUser,registerUser,getUser} = require('../controller/userController')

const {protect} = require('../middleware/authMiddleWare')

router.post('/',loginUser);
router.get('/get',protect,getUser);
router.post('/register', registerUser)
// router.route('/').get((req,res) => {
//     user.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error : ' + err));
// });

// router.route('/add').post((req,res)=>{
//     const userName = req.body.userName;

//     const newUser = new user({userName});

//     newUser.save()
//         .then(()=> res.json("user added .....!"))
//         .catch(err => res.status(400).json('Error : ' + err));
// });

module.exports = router;