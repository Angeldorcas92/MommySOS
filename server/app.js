const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserModel = require('./models/users')
const dotenv = require("dotenv").config();
const { MongoClient } = require('mongodb');
app.use(express.json());
const bcrypt =require("bcrypt");
const userRouter = require('./router/userRouter');
const Router = express.Router();
app.use('/api', userRouter);



app.use(express.json());

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files (e.g., images, CSS, client-side JavaScript)
app.use(express.static('public'));

// Custom middleware for logging request information
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

// Use the userRouter for user-related routes
app.use('/api', userRouter);


mongoose.connect(process.env.DATABASE_URL);
const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected successfully to database')});

app.post("/register", async (req, res) => {
     const user = req.body;
      const newUser = new UserModel(user);
      await newUser.save();
      res.json(user);
      

      
     

  });
  app.get('/', (req, res) =>{
    res.render('index.js')
  })
  app.get('/login', (req, res)=>{
    res.render('login.js')
  })
  app.get('/register',(req, res)=>{
    res.render('register.js')
  })
  

  app.listen(3000, () => {
    console.log("server connected")
  })
  


