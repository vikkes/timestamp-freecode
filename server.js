var express = require('express');
var moment =require("moment");
var app = express();

app.get('/', function (req, res) {
  res.json({
      app:"Timestamp"
    });
});

app.get('/:str', function (req, res) {
   var myDate;
  if(/^\d{8,}$/.test(req.params.str)) {
    myDate = moment(req.params.str, "X");
  } else {
    myDate = moment(req.params.str, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }


});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});
