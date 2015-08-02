var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/even_numbers/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //
    function evenNumbers() {
      if (lines[iter] % 2 == 0) {
        result = 1;
      } else {
        result = 0;
      }
      return result;
    }
    console.log(evenNumbers());
  }
});
