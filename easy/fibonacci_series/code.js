var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/fibonacci_series/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    // begin
    function fibonacci(line) {
      if (line == 0) {
        return 0;
      } else if (line == 1) {
        return 1;
      } else {
        return fibonacci(line - 1) + fibonacci(line - 2)
      }
    };
    console.log(fibonacci(lines[iter]));
    //end
  }
});
