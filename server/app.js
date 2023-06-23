const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const app = express();
const User = require('./models/users')
const dotenv = require("dotenv").config();
const { MongoClient } = require('mongodb');
app.use(cors());
const bcrypt =require("bcrypt");
const userRouter = require('./router/userRouter');
const Router = express.Router();





app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});


app.use('/api', userRouter);


mongoose.connect(process.env.DATABASE_URL);
const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected successfully to database')});

// app.post("/register", async (req, res) => {
//      const user = req.body;
//       const newUser = new UserModel(user);
//       await newUser.save();
//       res.json(user);

//   });
  
// app.post("/createUser", async (req, res) => {
//   try {
//     const { fullname, email, password } = req.body;
//     const User = newUser({
//       fullname,
//       email,
//       password,
//       confirmpassword
//     });
//     await User.save();

//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to create user" });
//   }
// });
app.use(express.json());


app.post('/createUser', async (req, res) => {
  // Extract user data from the request body
  const { fullname, email, password, confirmpassword } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    // Create a new user document using the User model
    const user = new User({ fullname, email, password: hashedPassword, confirmpassword });

    // Save the user document to the database
    await user.save();

    // Log the created user
    console.log('User created:', user);

    // Send a response back to the client
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Handle any errors that occurred during user creation
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
});


app.get('/api/users', (req, res) => {
  // Retrieve all users from the database
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'An error occurred while retrieving users' });
    });
});


app.post('/loginUser', async (req, res) => {
  const { email, password } = req.body;

  // Find the user in the database based on the email
  const user = await User.findOne({ email });

  if (!user) {
    // User not found, return invalid credentials message
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare the provided password with the hashed password stored in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    // Password matches, return login successful message
    res.status(200).json({ message: "Login successful" });
  } else {
    // Password does not match, return invalid credentials message
    res.status(401).json({ message: "Invalid credentials" });
  }
});



  app.listen(3000, () => {
    console.log("app is running on port 3000 ")
  })
  


