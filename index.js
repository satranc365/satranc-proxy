const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: function (origin, callback) {
    // db.loadOrigins is an example call to load
    // a list of origins from a backing database
    db.loadOrigins(function (error, origins) {
      callback(error, origins);
    });
  },
};

app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("Running");
});

app.get("/3ds/:encodedUrl", (req, res) => {
  const encodedUrl = req.params.encodedUrl;
  const htmlContent = atob(decodeURI(encodedUrl));
  res.send(htmlContent);
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
