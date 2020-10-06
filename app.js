const express = require('express');
const path = require('path');
const app = express();


// const express = require("express");
const router = express.Router();


app.get("/", (req, res) => res.send("Hello World, nice!! "));

// app.use(express.static("public"));
// app.use("/static", express.static("public"));
// app.use(express.static(__dirname + "public"));

// app.use(express.static(path.join(__dirname, ‘public’)));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


// app.get('/map', (req, res) => res.send("Hello World!"));

