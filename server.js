const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname + '/dist')));

app.get('*', (req, res) => {
  res.sendFile( path.join(__dirname + '/dist') );
});

const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Webapp is running in http://localhost:${this.address().port}`)
});
