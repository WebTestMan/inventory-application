const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS Category (
   categoryName VARCHAR ( 255 ) PRIMARY KEY
);

INSERT INTO Category (categoryName) 
VALUES
  ('Land'),
  ('Air');


CREATE TABLE IF NOT EXISTS Faction (
  factionName VARCHAR ( 255 ) PRIMARY KEY
);

INSERT INTO Faction (factionName) 
VALUES
  ('Autobot'),
  ('Decepticon');

CREATE TABLE IF NOT EXISTS Character (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  characterName VARCHAR ( 255 ),
  factionName VARCHAR ( 255 ) REFERENCES Faction(factionName),
  categoryName VARCHAR ( 255 ) REFERENCES Category(categoryName)
  );

INSERT INTO Character (characterName, factionName, categoryName)
VALUES
  ('Hot Rod', 'Autobot', 'Land'),
  ('Scourge', 'Decepticon','Air');
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
