var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/data_recovery/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(";");

    function words() {
      return line[0].split(" ");
    };

    function nums() {
      return line[1].split(" ");
    };

    function parsedNumbers() {
      return nums().map(function(number) {
        return parseInt(number);
      });
    };

    function wordsInCorrectOrder() {
      var numbers = parsedNumbers();
      var result = [];
      for (var i = 1; i <= words().length; i++) {
        if (numbers.indexOf(i) == -1) {
          numbers.push(i);
        }
        result.push(words()[numbers.indexOf(i)]);
      }
      return result.join(" ");
    };
    console.log(wordsInCorrectOrder());
    // end
  }
});
