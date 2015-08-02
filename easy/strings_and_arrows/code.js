var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/strings_and_arrows/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length; iter++) {
    //
    var line = lines[iter];
    var arrow1 = ">>-->";
    var arrow2 = "<--<<";
    var count = 0;
    for (var i = 0; i < line.length; i++) {
      if (line.slice(i, i + 5) == arrow1 || line.slice(i, i + 5) == arrow2) {
        count++;
      }
    }
    if (line.length > 0) {
      console.log(count);
    }
    //
  }
});
