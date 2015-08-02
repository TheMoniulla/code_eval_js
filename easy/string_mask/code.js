var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/string_mask/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length; iter++) {
    //begin
    var line = lines[iter].split(" ");
    var word = line[0];
    var mask = line[1];
    var output = "";
    for (var i = 0; i < word.length; i++) {
      if (mask[i] == 1) {
        output += word[i].toUpperCase();
      } else {
        output += word[i].toLowerCase();
      }
    }
    console.log(output);
    //end
  }
});
