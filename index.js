import express from "express";
import { getCarValue } from "./carValue.js";
const server = express();

server.get("/:model/:year", (req, res) => {
  const model = req.params.model;
  const year = parseInt(req.params.year);

  const value = getCarValue(model, year);
  const result = {
    model,
    year,
    value,
  };
  res.send(result);
});

server.get("/", (req, res) => {
  const model = req.query.model;
  const year = parseInt(req.query.year);

  const value = getCarValue(model, year);
  const result = {
    model,
    year,
    value,
  };
  res.send(result);
});

server.listen(8000, () => {
  console.log("sever started and listening on port 8000");
});
