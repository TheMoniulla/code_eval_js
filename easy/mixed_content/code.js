var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/mixed_content/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(",");

    function words() {
      return line.filter(function(character) {
        return character.match(/[a-z]/);
      }).join(",");
    };

    function numbers() {
      return line.filter(function(digit) {
        return digit.match(/\d/);
      }).join(",");
    };
    console.log(words() + "|" + numbers());
    //end
  }
});
