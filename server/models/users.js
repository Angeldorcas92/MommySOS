const express = require("express");
const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true, min:6 },
    email: { type: String, required: true, min:6, unique:true },
    password: { type: String, required: true, min:6 },
    confirmPassword: { type: String, required: true},
    date: { type: Date, default: Date.now}
  });

  const User = mongoose.model('users', UserSchema);
     module.exports = User;