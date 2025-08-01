let express = require('express');
let app = express();

// Serve "Hello Express" for GET requests to "/"
app.get("/", function(req, res) {
  res.send("Hello Express");
});

module.exports = app;
