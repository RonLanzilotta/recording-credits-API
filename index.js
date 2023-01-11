import express from "express";
import credits from "./db/credits.json" assert { type: "json" };

const app = express();

app.listen(3000, () => {
  console.log("app listening on port 3000");
});

app.get("/", (req, res) => {
  res.json(credits);
});

app.get("/weee", (req, res) => {
  res.json(credits);
});
