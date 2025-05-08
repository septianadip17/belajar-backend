const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`); 
  console.log(req.params);
})

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
  console.log(req.params);
})

app.get("/cats", (req, res) => {
  res.send("Meow!");
});

app.post("/cats", (req, res) => {
  res.send("Post request to the homepage");
});

app.get("/dogs", (req, res) => {
  res.send("Woof!");
  console.log("Someone made a request to /dogs");
});

app.get("*", (req, res) => {
  res.send("I don't know that path!");
  console.log(`Unknown path requested: ${req.path}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});