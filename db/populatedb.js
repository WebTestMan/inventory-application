const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  categoryName VARCHAR ( 255 )
);

INSERT INTO category (categoryName) 
VALUES
  ('Land');

CREATE TABLE IF NOT EXISTS faction (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  factionName VARCHAR ( 255 )
);

INSERT INTO faction (factionName) 
VALUES
  ('Autobot');

CREATE TABLE IF NOT EXISTS character ( 
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  characterName VARCHAR ( 255 ),
  factionName VARCHAR ( 255 )
  );

  INSERT INTO character (characterName, factionName) 
VALUES
  ('Hot Rod', 'Autobot');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
