const { Client } = require("pg");
require("dotenv").config();

const SQL = `
DROP TABLE Category, Faction, Character;
`;

async function main() {
  console.log("clearing...");
  const client = new Client({
    connectionString: process.env.CONNECTION,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
