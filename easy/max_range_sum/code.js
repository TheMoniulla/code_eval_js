var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/max_range_sum/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(";");

    function parsedNumbers() {
      return line[1].split(" ").map(function(nums) {
        return parseInt(nums);
      });
    }

    var x = parseInt(line[0]);

    function sumOfNumbers() {
      sums = [];
      for (var i = 0; i < parsedNumbers().length; i++) {
        if (i + x <= parsedNumbers().length) {
          sum = parsedNumbers().slice(i, i + x).reduce(function(a, b) {
            return a + b;
          }, 0)
          sums.push(sum)
        }
      }
      return sums
    }

    function highestSum(){
      result = sumOfNumbers().sort(function(a, b) {
        return a < b
      })[0]
      if (result < 0)
        return 0
      else
        return result
    }
    console.log(highestSum());

    //end
  }
});
