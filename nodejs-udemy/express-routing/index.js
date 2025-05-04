const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cats', (req, res) => {
  res.send('Meow!'); 
})

app.get('/dogs', (req, res) => {
  res.send('Woof!');
  console.log('Someone made a request to /dogs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})