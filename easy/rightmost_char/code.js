var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/rightmost_char/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //
    var line = lines[iter].split(",");
    console.log(line[0].indexOf(line[1]));
  }
});
