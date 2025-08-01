let express = require('express');
let app = express();

// Serve static assets from the "public" directory
app.use("/public", express.static(__dirname + "/public"));

// Serve index.html for GET requests to "/"
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
