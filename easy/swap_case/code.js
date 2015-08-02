var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/swap_case/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length; iter++) {
    //begin
    var line = lines[iter].split('');

    function swapCase() {
      return line.map(function(letter) {
        if (letter.match(/[a-z]/))
          return letter.toUpperCase();
        else if (letter.match(/[A-Z]/))
          return letter.toLowerCase();
        else
          return letter
      });
    };

    console.log(swapCase().join(''));

    //end
  }
});
