var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/multiply_lists/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].trim().split("|");

    var array = line.map(function(numbers) {
      return numbers.trim().split(" ");
    });

    function multiply(firstNumber, secondNumber) {
      var firstNumber = array[0];
      var secondNumber = array[1];
      var result = 0;
      var output = [];
      for (var i = 0; i < firstNumber.length; i++) {
        result = parseInt(firstNumber[i]) * parseInt(secondNumber[i]);
        output.push(result);
      }
      return output;
    }

    console.log(multiply(array).join(" "));
    //end
  }
});
