const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cats', (req, res) => {
  res.send('Meow!'); 
})

app.get('/dogs', (req, res) => {
  res.send('Woof!');
})

app.get('*', (req, res) => {
  res.send('I dont know that path!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})