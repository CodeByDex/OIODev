const mongoose = require('mongoose');
const { Schema } = mongoose;
<<<<<<< HEAD
// const bcrypt = require('bcrypt');
=======
>>>>>>> bc06a7dbe454a9e7f3501866b1381d608e1b928f

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

const User = mongoose.models.users || mongoose.model("users", userSchema);

module.exports = User;