const express = require('express');
require('dotenv').config();
const app = express();
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL,
     {useNewUrlParser:true, useUnifiedTopology: true},
     (error)=>{if(error){console.log("erro no mongoose: " + error)}else{console.log('Listening')}})



app.use('/user', express.json(), userRouter);
//aplicar em qualquer endpoint

app.use('/admin', express.json(),adminRouter)

app.listen(process.env.PORT)

