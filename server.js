const express = require("express");
const employees = require("./app/data/employees");
const path = require("path");

const PORT = 8080;

const app = express();

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
  });