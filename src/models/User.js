const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
    }
    },
    {

    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;