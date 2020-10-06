const express = require('express');
const app = express();
// const express = require("express");
const router = express.Router();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World, nice!! "));


app.listen(port, () => console.log(`Server is running on port ${port}`));

// app.get('/map', (req, res) => res.send("Hello World!"));

