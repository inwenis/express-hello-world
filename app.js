const express = require('express')
const app = express()
const port = 3000

let counter = 0;

setInterval(() => {
  counter++;
}, 1000);

app.get('/', (req, res) => {
  res.send('Hello World!')
}).get('/counter', (req, res) => {
  res.send(`Counter value: ${counter}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
