import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
  console.log(req.rawHeaders);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

