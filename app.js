const express = require("express");
require("dotenv").config();
const inventoryRouter = require("./routes/router");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", inventoryRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Database Express App - listening on port ${PORT}!`);
});
