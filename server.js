const express = require("express");
const employees = require("./app/data/employees");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes");

const PORT = 8080;

const app = express();

app.use(express.static(path.join(__dirname + "app/public")));

app.get(htmlRoutes.defaultPage(), function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get(htmlRoutes.surveyRoute(), function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
  });