var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/calculate_distance/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    NUMBERS = lines[iter].match(/-?\d+/g);

    function subtractX() {
      return NUMBERS[0] - NUMBERS[2]
    }

    function subtractY() {
      return NUMBERS[1] - NUMBERS[3]
    }

    function getDistance(a, b) {
      return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    };

    console.log(getDistance(subtractX(), subtractY()));
    //end
  }
});
