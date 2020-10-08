const express = require("express");
const app = express();
const path = require("path");
// const router = express.Router();

// app.set("view engine", "ejs");
const port = process.env.PORT || 5000;

// app.use(express.static(__dirname + "../public"));
// app.set('views', path.join(__dirname, '/frontend/public'));
// app.get("/", (req, res) => res.render('index'));

app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
