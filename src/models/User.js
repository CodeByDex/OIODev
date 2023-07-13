const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'Please fill a valid email address']
        },

        name: {
            type: String,
            required: true
        },
        
        company: {
            type: String
        },

        image: {
            type: String
        }
    },
    {

    }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

module.exports = User;