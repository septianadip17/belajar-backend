import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>HP: +62.......</p>");

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

