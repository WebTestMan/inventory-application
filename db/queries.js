const pool = require("./pool");

async function getAllTransformers() {
  const { rows } = await pool.query("SELECT * FROM Character");

  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM Category");

  return rows;
}

async function getAllFactions() {
  const { rows } = await pool.query("SELECT * FROM Faction");

  return rows;
}

async function addCharacter(newCharacter) {
  await pool.query(
    "INSERT INTO Character ( characterName, factionName, categoryName) VALUES ($1, $2, $3)",
    [
      newCharacter.characterName,
      newCharacter.factionName,
      newCharacter.categoryName,
    ]
  );
}

module.exports = {
  getAllTransformers,
  getAllCategories,
  getAllFactions,
  addCharacter,
};
