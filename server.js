const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { index: false, extensions: ['html'] }));

app.use(cors());
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


const PORT = process.env.PORT || 8082;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on ${PORT}`);
  }
});