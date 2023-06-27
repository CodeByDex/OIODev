const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({});

const User = mongoose.model("User", userSchema);

module.exports = User;