var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/sum_of_integers/input.txt", "utf8", function(err, data) {
  function sumOfIntegers(array) {
    return array.reduce(function(sum, number) {
      return sum + parseInt(number);
    }, 0);
  }

  array = data.trim().split('\n');
  console.log(sumOfIntegers(array));
});
