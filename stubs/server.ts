import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/teste', (req, res) => {
  res.json({
    teste: 'ok',
  });
});

app.listen(3030, () => {
  console.log('Example app listening on port 3030!');
});
