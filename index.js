const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Importing routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to database
mongoose.connect(process.env.DB_CONNECT, 
{ useNewUrlParser: true },  
() => console.log("Connected to database !"));

//Midlleware
app.use(express.json());

//Route middlewares
app.use('/api/user', authRoute);



app.listen(3000, () => console.log("The server is running..."))