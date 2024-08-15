const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Allow all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send("Running");
});

app.post("/3ds/:encodedUrl", (req, res) => {
  try {
    const encodedUrl = req.params.encodedUrl;
    const htmlContent = Buffer.from(
      decodeURIComponent(encodedUrl),
      "base64"
    ).toString("utf-8");
    res.send(htmlContent);
  } catch (error) {
    res.status(400).send("Invalid encoded URL");
  }
});

// Set default port to 3000 if not set in .env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
