import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://AdoPet:123@adopet.cztjz47.mongodb.net/AdoPet");

let db = mongoose.connection;

export default db;