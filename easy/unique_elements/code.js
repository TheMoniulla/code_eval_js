var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/unique_elements/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //
    var line = lines[iter].split(",");

    function remove() {
      var result = [];
      line.forEach(function(number) {
        if (result.indexOf(number) == -1)
          result.push(number);
      });
      return result;
    };
    console.log(remove().join(","));
    //end
  }
});
