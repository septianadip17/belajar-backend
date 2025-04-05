const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send(
    "Hello, congratulations! you have successfully created a server with express js."
  ); 
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
