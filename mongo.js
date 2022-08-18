const { MongoClient } = require("mongodb");
require("dotenv").config();

let db;

async function mongoConnect() {
  const uri = process.env.MONGO_URI;
  ////coming in from .env file
  const client = new MongoClient(uri);
  //client now holds .env uri connection string
  try {
    await client.connect(); 
    db = await client.db(process.env.MONGO_DATABASE);
    console.log("**DB CONNECTED ON PORT 4000**".cyan.underline);
  } catch (error) {
    console.error(error);
  }
}
function occhiDB() {
  return db;
}
module.exports = {
  mongoConnect,
  occhiDB,
};