const express = require('express');
const app = express();
const menuRoutes = require('./routes/menu');

app.use(express.json());

app.use('/menu', menuRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
