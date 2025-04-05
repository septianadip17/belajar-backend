const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./api-routes");

app.get("/", (req, res) => {
  res.send("Selamat Datang di Data Center Siswa Indonesia");
});

app.use("/DataSiswa", apiRouter);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
