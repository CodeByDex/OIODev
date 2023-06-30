const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },

        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },
        
        company: {
            type: String
        }
    },
    {

    }
);

userSchema.pre('save', function(next) {  
        if(this.isModified('firstName') || this.isNew) {
            this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1);
        }

        if(this.isModified('lastName') || this.isNew) {
            this.lastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
        }

    next();
});

userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;