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
  const categories = await db.getAllCategories();
  const factions = await db.getAllFactions();
  res.render("addCharacter", {
    title: "Add Character",
    categories: categories,
    factions: factions,
  });
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

async function deleteCharacterGET(req, res) {
  const characters = await db.getAllTransformers();
  res.render("deleteCharacter", {
    title: "Delete Character",
    characters: characters,
  });
}

async function deleteCharacterPOST(req, res) {
  const character = req.body.characterName;

  console.log(`Character to be deleted ${character}`);
  await db.deleteCharacter(character);
  res.redirect("/");
}

module.exports = {
  getCharacters,
  getCategories,
  getFactions,
  addCharacterGET,
  addCharacterPOST,
  deleteCharacterGET,
  deleteCharacterPOST,
};
