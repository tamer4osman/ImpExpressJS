const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));

app
  .route("/")
  .get((req, res) => {
    res.send("Welcome!");
  })
  .put((req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

console.log("Hello");
