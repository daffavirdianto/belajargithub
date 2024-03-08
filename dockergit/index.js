const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Saya sedang belajar GitHub');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});