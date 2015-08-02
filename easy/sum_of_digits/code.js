var fs = require("fs");
fs.readFile("/Users/irek/Desktop/js-workspace/done/sum_of_digits/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].trim().split('');

    function sumOfDigits() {
      return line.reduce(function(sum, number) {
        return sum + parseInt(number);
      }, 0)
    }

    console.log(sumOfDigits());
    //end
  }
});
