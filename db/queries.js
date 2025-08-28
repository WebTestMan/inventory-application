const pool = require("./pool");

async function getAllTransformers() {
  const { rows } = await pool.query("SELECT * FROM Character");

  return rows;
}

module.exports = {
  getAllTransformers,
};
