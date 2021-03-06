const express = require ('express');
const app = express() ;
const dotenv  = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
//const request = require('request');

//importing routes
const comm = require('./routes/store');

dotenv.config();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true  }, (err) =>{console.log('Connected...')  });


//middleware
app.use(cors());
app.use (express.json()) ;
//app.use(cors());

//route middleware
app.use ('/api',comm);

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log('server is listening')); 