const mongoose = require('mongoose');
const { Schema } = mongoose;

const portfolioSchema = new Schema({});

const Portfolio = mongoose.model("User", portfolioSchema);

module.exports = Portfolio;