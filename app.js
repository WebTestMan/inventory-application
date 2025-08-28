const express = require("express");
require("dotenv").config();
const customRouter = require("./routes/router");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", customRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`Database Express App - listening on port ${PORT}!`);
});
