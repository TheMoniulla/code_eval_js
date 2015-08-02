var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/roller_coaster/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length; iter++) {
    //begin
    var line = lines[iter];

    function rollerCoaster(line) {
      var upper = true;
      return line.split('').map(function(letter) {
        if (letter.match(/[a-zA-Z]/)) {
          if (upper) {
            upper = false;
            return letter.toUpperCase();;
          } else {
            upper = true;
            return letter.toLowerCase();
          }
        } else
          return letter;
      })
    }
    console.log(rollerCoaster(line).join(""));

    //end
  }
});
