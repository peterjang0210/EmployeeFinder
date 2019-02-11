const express = require("express");
const path = require("path");

const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.use(express.static(path.join(__dirname + "app/public")));

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});