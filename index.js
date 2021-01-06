const express = require("express");

const app = express();

const { PORT = 8080, MESSAGE = "no message" } = process.env;

app.get("/", (req, res) => res.status(200).json({ MESSAGE }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
