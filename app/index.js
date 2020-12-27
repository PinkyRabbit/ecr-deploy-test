const path = require("path");
const express = require("express");

const app = express();
const port = 80;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.get("*", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
