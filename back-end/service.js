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
const { addElectricProduct } = require('./controller/electricProduct.controller');

app.use('/login',login);
app.use('/product',addElectricProduct);

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  });

app.listen(port,()=>{
    console.log(`listening through port => ${port}`);
})
