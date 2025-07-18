const express = require('express')
const axios = require('axios');
const app = express()
const port = process.env.PORT || 3000

let counter = 0;

setInterval(async () => {
  counter++;
  try {
    const resp = await axios.get('https://express-hello-world-3zfl.onrender.com/counter');
    // console.log(`Counter updated: ${counter}, Response from server: ${resp.data}`);
  } catch (error) {
    console.error(`Error fetching counter: ${error.message}`);
  }
}, 1000);

app.get('/', (req, res) => {
  res.send('Hello World!')
}).get('/counter', (req, res) => {
  res.send(`Counter value: ${counter}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
