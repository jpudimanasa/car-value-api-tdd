import express from "express";
import env from "dotenv";
import { getCarValue } from "./carValue.js";
import { getSimilarCars } from "./similarCarsGetter.js";
const server = express();

env.config();

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

server.get("/similar-cars", (req, res) => {
  const make = req.query.make;
  const similarCars = getSimilarCars(make);
  res.send(similarCars);
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log("sever started and listening on port 8000");
});
