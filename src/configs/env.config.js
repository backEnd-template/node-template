const dotenv = require("dotenv");
dotenv.config();

const config = {
  databaseUrl: process.env.DATABASE_URL,
  secret: process.env.ACCESS_TOKEN_SECRET,
};

module.exports = config;