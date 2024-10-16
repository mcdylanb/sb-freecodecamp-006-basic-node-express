let express = require("express");
let app = express();
require("dotenv").config();

let absolutePath = __dirname + "/views/index.html";

app.use(function middleWare(req, res, next){
  var string = req.method + " " + req.path + " - " + req.ip ;
  console.log(string);
  next();
});
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      message: "HELLO JSON",
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
});

module.exports = app;
