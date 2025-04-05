const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    nama: "Richard Muhammad",
    tanggalLahir: "14 Januari 1994",
    jenisKelamin: "Laki-Laki",
    hobi: "Membaca Buku"
  })
});

module.exports = router;
