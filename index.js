const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.options("*", cors()); // include before other routes
app.get("/", (req, res) => {
  res.send("Running");
});

app.post("/3ds/:encodedUrl", (req, res) => {
  const encodedUrl = req.params.encodedUrl;
  const htmlContent = atob(decodeURI(encodedUrl));
  res.send(htmlContent);
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
