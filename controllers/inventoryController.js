const db = require("../db/queries");

async function getCharacters(req, res) {
  const characters = await db.getAllTransformers();
  res.render("index", { title: "Homepage", characters: characters });
}

async function getCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", { title: "Categories", categories: categories });
}

async function getFactions(req, res) {
  const factions = await db.getAllFactions();
  res.render("factions", { title: "Factions", factions: factions });
}

module.exports = {
  getCharacters,
  getCategories,
  getFactions,
};
