const { Pool } = require("pg");

let hostname;
if (process.env.NODE_ENV == "dev") {
  hostname = "localhost";
} 

module.exports = new Pool({
  host: hostname, // or wherever the db is hosted
  user: process.env.DB_USER, //"mgh",
  database: "top_users",
  //   password: "<role_password>",
  port: 5432, // The default port
});
