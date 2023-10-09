require('dotenv').config();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const express = require('express');
const plants = require('./routes/plants');
const fileUpload = require('express-fileupload'); 

const mongoose = require('mongoose');
//express app
const app = express();
app.use(cors());

//middleware
app.use(express.json());
app.use(fileUpload()); 


app.use((req,res,next) =>{
    console.log(req.path, req.method);
    next();
} )
//routes
app.use('/plants',plants);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connected to db');
        app.listen(process.env.port, ()=>{
            console.log('listening for requests on port 4000');
        });
    })
    .catch((err)=>{
        console.log(err);
    })



//listen for requests

