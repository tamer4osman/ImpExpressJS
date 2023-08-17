const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config(); // Load variables from .env

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome! You have arrived on the page.");
});

console.log("Hello");