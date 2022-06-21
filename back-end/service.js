const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

require('dotenv').config();


const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3600;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGOOSE_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

// const exerciseRouter = require('./routes/exercise');
const login = require('./routes/user');

app.use('/login',login);


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  });

app.listen(port,()=>{
    console.log(`listening through port => ${port}`);
})
