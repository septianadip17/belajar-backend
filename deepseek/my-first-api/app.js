const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Halo dunia dari API pertamaku! 🚀');
});

app.get('/about', (req, res) => {
  res.json({
    name: "Septian Adi Pratama",
    goal: "Menjadi Fullstack Developer hahahahahah",
  });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});