const express = require("express");

const app = express();

const { PORT = 8080, TEST_ENV = "TEST_ENV not set" } = process.env;

app.get("/", (req, res) => res.status(200).send("docker-to-node"));

app.get("/env", (req, res) => res.status(200).json({ env: TEST_ENV }));

app.get("/ping", (req, res) => res.status(200).send("pong"));

app.get("/health", (req, res) =>
  res.status(200).json({ status: 200, message: "healthy" })
);

app.listen(PORT, () => console.log(`Listening :${PORT}`));
