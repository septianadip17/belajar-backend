const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./api-routes");

app.get("/", (req, res) => {
  res.send(
    "Hallo, selamat anda telah berhasil membuat webserver dengan express js"
  ); 
});

app.use("/api", apiRouter); 

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});