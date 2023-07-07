const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const app = express();
const User = require('./models/users')
const dotenv = require("dotenv").config();
const { MongoClient } = require('mongodb');
const jwt = require ('jsonwebtoken')
app.use(cors());
const bcrypt =require("bcrypt");
const userRouter = require('./router/userRouter');
const { registerValidation, loginValidation } = require('./joi');
const cookieParser = require('cookie-parser');






app.use(express.json());
app.use(cookieParser());



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


// app.post('/createUser', async (req, res) => {
//   // Extract user data from the request body
//   const { error } =  registerValidation(req.body);
//   if (error) return  res.status(400).send(error.details[0].message)
//   const { fullname, email, password, confirmpassword } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

//     // Create a new user document using the User model
//     const user = new User({ fullname, email, password: hashedPassword, confirmpassword });

//     // Save the user document to the database
//     await user.save();

//     // Log the created user
//     console.log('User created:', user);

//     // Send a response back to the client
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     // Handle any errors that occurred during user creation
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'An error occurred while creating the user' });
//   }
// });
app.post('/createUser', async (req, res) => {
  console.log('Request body:', req.body); 
  try {
    const { error } = await registerValidation(req.body);
    if (error) {
      console.log('Validation error:', error);
      return res.status(400).send(error.details[0].message);
      const emailExist = await User.findOne()({ email:req.body.email });
      if (emailExist) return res.status(400).send( 'Email already exists');
    }

    const { fullname, email, password, confirmPassword } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ fullname, email, password: hashedPassword, confirmPassword });
      await user.save();
      console.log('User created:', user);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'An error occurred while creating the user' });
    }
  } catch (error) {
    console.error('Validation error:', error);
    res.status(400).send('Invalid request data');
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
  const { error } = await loginValidation(req.body);
    if (error) {
      console.log('Validation error:', error);
      return res.status(400).send(error.details[0].message);
     
    }

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
    
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.cookie('jwt', token, { httpOnly: true });
    res.header('auth-token', token).json({ message: "Login successful" });
    console.log('JWT token:', token);

    
  } else {
    // Password does not match, return invalid credentials message
    res.status(401).json({ message: "Invalid credentials" });
  }
 
});
app.get('/api/bookings', (req, res) => {
  // Handle GET request for bookings
  res.json({ message: 'Book a caregiver' });
});

app.post('/api/bookings', (req, res) => {
  // Handle POST request to create a new booking
  res.json({ message: ' Booking successfull' });
});

// Assuming you're using an Express.js server
app.post("/logout", (req, res) => {
  res.clearCookie('jwt');
  res.json({ success: true, message: 'Logged out successfully' });
});




  app.listen(3000, () => {
    console.log("app is running on port 3000 ")
  })