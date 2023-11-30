server.get("/", (req, res) => {
  const make = req.query.make;
  const result = make;
  res.send(result);
});
