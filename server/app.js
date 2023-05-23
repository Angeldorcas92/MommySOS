 const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserModel = require('./models/users')
const dotenv = require("dotenv").config();
const { MongoClient } = require('mongodb');
app.use(express.json());



mongoose.connect(process.env.DATABASE_URL);
const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected successfully to database')});

app.post("/createUser", async (req, res) => {
     const user = req.body;
      const newUser = new UserModel(user);
      await newUser.save();

      res.json(user)
     

  });

  app.listen(3100, () => {
    console.log("server connected")
  })
  


