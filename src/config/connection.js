import mongoose from 'mongoose';
import {uri, options} from "./mongodb"

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

mongoose.connect(
    uri,
    options
);

//Mongoose is required for graphQL
export const mongooseConnection = mongoose.connection;





