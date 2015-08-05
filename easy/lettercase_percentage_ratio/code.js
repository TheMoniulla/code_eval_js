var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/lettercase_percentage_ratio/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var lowercaseLetters = lines[iter].match(/[a-z]/g);
    var uppercaseLetters = lines[iter].match(/[A-Z]/g);

    function count(value) {
      if (value == null)
        return 0
      else
        return value.length
    };

    var lowerPercentage = 100.0 * count(lowercaseLetters) / lines[iter].length;
    var upperPercentage = 100.0 * count(uppercaseLetters) / lines[iter].length;

    function output(lower, upper) {
      return 'lowercase: ' + lower.toFixed(2) + ' uppercase: ' + upper.toFixed(2)
    };

    console.log(output(lowerPercentage, upperPercentage));
    //end
  }
});
