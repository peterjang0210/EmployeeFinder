const express = require("express");

const PORT = 8080;

const app = express();

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
  });