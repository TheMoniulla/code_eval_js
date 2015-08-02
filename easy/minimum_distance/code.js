var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/minimum_distance/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(" ");

    function minDistance() {
      var count = 0;

      for (var i = 1; i < line.length; i++) {
        if (line[0] > line[i])
          count += line[0] - line[i]
        else
          count += line[i] - line[0]
      }
      return count;
    }
    console.log(minDistance());
    //end
  }
});
