const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks!\n v6");
});
 
module.exports.app = app;
