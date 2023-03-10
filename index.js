import express from "express";
import db from "./connection.js";
import cors from "cors";
import credits from "./db/credits.json" assert { type: "json" };

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

db.on("connected", () => {
  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
});

app.get("/", (req, res) => {
  res.json(credits);
});
