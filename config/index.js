const dotenv = require('dotenv');
dotenv.config();

const { EXPRESS_PORT, DB_URI } = process.env;

module.exports = { EXPRESS_PORT, DB_URI };
