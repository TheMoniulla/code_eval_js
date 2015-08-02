var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/swap_numbers/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].trim().split(" ");

    function swap(word) {
      array = word.split('')
      temp = array[0]
      array[0] = array[array.length - 1]
      array[array.length - 1] = temp
      return array.join('');
    }

    function output() {
      return line.map(function(word) {
        return swap(word)
      }).join(' ')
    }

    console.log(output());
    //end
  }
});
