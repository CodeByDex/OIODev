const mongoose = require('mongoose');
const { Schema } = mongoose;

const portfolioSchema = new Schema(
    {   
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'user',
        },

        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        bio: {
            type: String,
            required: true,
            maxLength: 256
        },

        rate: {
            type: Number,
            required: true
        },

        portfolioUrl: {
            type: String,
            required: true
        },

        githubUrl: {
            type: String
        },

        linkedinUrl: {
            type: String
        },
        
        available: {
            type: Boolean,
            required: true
        }
    },
    {

    }
);

portfolioSchema.pre('save', function(next) {  
    if(this.isModified('firstName') || this.isNew) {
        this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1);
    }

    if(this.isModified('lastName') || this.isNew) {
        this.lastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
    }

next();
});

const Portfolio = mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;