var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/compressed_sequence/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(" ");

    var result = [];
    var lastElement = null;
    line.forEach(function(element) {
      if (lastElement == null) {
        result.push([element, 1]);
      } else if (lastElement == element) {
        result[result.length - 1][1]++;
      } else {
        result.push([element, 1]);
      }
      lastElement = element;
    })

    function output(result) {
      return result.map(function(array) {
        return '' + array[1] + ' ' + array[0];
      }).join(' ')
    }

    console.log(output(result));
    //end
  }
});
