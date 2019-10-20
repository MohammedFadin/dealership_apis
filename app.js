const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks!\n v2");
});
 
module.exports.app = app;
