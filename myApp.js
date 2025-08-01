require('dotenv').config(); // Load environment variables

let express = require('express');
let app = express();

// Serve static assets from the "public" directory
app.use("/public", express.static(__dirname + "/public"));

// Serve index.html for GET requests to "/"
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Serve JSON response on "/json"
app.get("/json", function(req, res) {
  let message = "Hello json";
  
  // Check the MESSAGE_STYLE environment variable
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

module.exports = app;
