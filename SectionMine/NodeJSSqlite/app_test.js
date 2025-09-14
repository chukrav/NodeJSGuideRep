// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World! ****');
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, Model, DataTypes, where, Op } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./dictionaryNZ.db",
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully. ***");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const Dictionary = sequelize.define(
  "word",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    word: Sequelize.TEXT,
    translation: Sequelize.TEXT,
    rating: Sequelize.INTEGER,
  },
  { tableName: "dictionary", timestamps: false }
);

const DictsNames = sequelize.define(
  "dictName",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    shortName: Sequelize.TEXT,
    longName: Sequelize.TEXT,
    parts: Sequelize.TEXT,
    startDate: Sequelize.TEXT,
  },
  { tableName: "namesDicts", timestamps: false }
);

const TableStatus = sequelize.define(
  "tabStatus",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    HP1_1_4: Sequelize.TEXT,
    HP1_5_8: Sequelize.TEXT,
    HP1_9_12: Sequelize.TEXT,
    HP1_11_15: Sequelize.TEXT,
    HP1_16_17: Sequelize.TEXT,
    HP2_1_4: Sequelize.TEXT,
    HP2_5_8: Sequelize.TEXT,
    HP2_9_12: Sequelize.TEXT,
    HP2_13_18: Sequelize.TEXT,
    HP3_1_5: Sequelize.TEXT,
    HP3_6_9: Sequelize.TEXT,
    HP3_10_15: Sequelize.TEXT,
    HP3_16_22: Sequelize.TEXT,
    IELTS_01: Sequelize.TEXT,
    IELTS_02: Sequelize.TEXT,
    IELTS_03: Sequelize.TEXT,
    IELTS_04: Sequelize.TEXT,
    HP4_1_18: Sequelize.TEXT,
  },
  { tableName: "tableStatus", timestamps: false }
);

async function selecDicts() {
  try {
    const dicts = await Dictionary.findAll(); // Selects all dicts
    //  console.log('All dicts:', JSON.stringify(dicts, null, 2));

    // Example with a WHERE clause
    const specificWord = await Dictionary.findOne({
      where: {
        word: "scenic",
      },
    });
    console.log("Specific word:", JSON.stringify(specificWord, null, 2));
  } catch (error) {
    console.error("Error fetching dicts:", error);
  } finally {
    await sequelize.close(); // Close the connection when done
  }
}

async function selecDictsNames() {
  try {
    const dicts = await DictsNames.findAll(); // Selects all dicts
    console.log("All dicts names:", JSON.stringify(dicts, null, 2));

    //   // Example with a WHERE clause
    //   const specificWord = await Dictionary.findOne({
    //     where: {
    //       word: "scenic",
    //     },
    //   });
    //   console.log("Specific word:", JSON.stringify(specificWord, null, 2));
  } catch (error) {
    console.error("Error fetching dicts:", error);
  } finally {
    await sequelize.close(); // Close the connection when done
  }
}

async function selectTableStatus() {
  try {
    // const tableSt = await TableStatus.findAll(); // Selects all dicts
    const tableSt = await TableStatus.findAll({
      attributes: ["id", "HP1_1_4"],
      where: {
        HP1_1_4: { [Op.eq]: 1 },
      },
    }); // Selects all dicts
    console.log("All status table:", JSON.stringify(tableSt, null, 2));
  } catch (error) {
    console.error("Error fetching dicts:", error);
  } finally {
    await sequelize.close(); // Close the connection when done
  }
}

// connectToDatabase();
// selecDicts();
// selecDictsNames();
selectTableStatus();

const app = express();
const port = 3000;
