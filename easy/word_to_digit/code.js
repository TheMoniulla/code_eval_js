var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/word_to_digit/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var dictionary = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
    }
    var line = lines[iter].trim().split(";");

    var output = line.map(function(number) {
      return dictionary[number];
    });
    console.log(output.join(''));

    //end
  }
});
