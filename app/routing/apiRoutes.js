const data = require("../data/employees.js")

module.exports = function (app){
    app.get("/api/employees", function(req, res){
        res.json(data.employees);
    });

    app.post("/api/employees", function(req, res){
        data.employees.push(req.body);
        res.end();
    });
}