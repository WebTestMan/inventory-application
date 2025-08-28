const db = require("../db/queries");

async function getCharacters(req, res) {
  const characters = await db.getAllTransformers();
  res.render("index", { title: "Homepage", characters: characters });
}

module.exports = {
  getCharacters,
};
