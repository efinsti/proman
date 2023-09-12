
const mongoose = require('mongoose');
require("dotenv").config()

const db = process.env.DB_URI;
 
async function connect() {
   
  try {
       mongoose.set('strictQuery', true);
    
    const conn = await mongoose.connect(db, {
        useNewUrlParser: true,
      });
    console.log(`MongoDB Connected: ${conn.connection.host}`)
    return true
   
} catch (error) {
    console.log(error);
    process.exit(1);
}}

module.exports = connect