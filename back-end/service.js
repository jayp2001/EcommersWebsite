const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

require('dotenv').config();


const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3600;

app.use(cors({
  credentials: true, origin: [
    "http://localhost:3000",
    "http://localhost:5000"
  ],
  exposedHeaders: ["set-cookie"],
}));
app.use(express.json());

const uri = process.env.MONGOOSE_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

// const exerciseRouter = require('./routes/exercise');
const login = require('./routes/user');
const product = require('./routes/product');
const auth = require('./routes/auth');
const { use } = require('./routes/user');
// const  {addFashionProduct } = require('./controller/fashionProduct.controller');

app.use('/login',login);
app.use('/product',product);
app.use('/auth',auth);
// app.use('/product',addFashionProduct);

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  });

app.listen(port,()=>{
    console.log(`listening through port => ${port}`);
})
