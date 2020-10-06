const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.get("/", (req, res) => res.send("Hello World, nice!! "));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

