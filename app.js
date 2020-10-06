const express = require('express');
const app = express();
const router = express.Router();

app.get("/", (req, res) => res.send("Hello World, nice!! "));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




