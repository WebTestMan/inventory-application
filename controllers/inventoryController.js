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

async function addCharacterGET(req, res) {
  res.render("addCharacter", { title: "Add Character" });
}

async function addCharacterPOST(req, res) {
  const character = {
    characterName: req.body.characterName,
    factionName: req.body.factionName,
    categoryName: req.body.categoryName,
  };
  console.log(`Username to be added ${character}`);
  await db.addCharacter(character);
  res.redirect("/");
}

module.exports = {
  getCharacters,
  getCategories,
  getFactions,
  addCharacterGET,
  addCharacterPOST,
};
