require('dotenv').config(); // Load environment variables

let express = require('express');
let app = express();

// Serve static files
app.use("/public", express.static(__dirname + "/public"));

// Serve index.html on root
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// JSON route using environment variable
app.get("/json", function(req, res) {
  let message = "Hello json";

  // Check MESSAGE_STYLE and transform if needed
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

module.exports = app;
