let express = require('express');
let app = express();

// Serve index.html for GET requests to "/"
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
