var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/set_intersection/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //
    var line = lines[iter].split(";");
    var array1 = line[0].split(",");
    var array2 = line[1].split(",");

    function remove() {
      return array2.filter(function(number) {
        return array1.indexOf(number) !== -1;
      });
    }

    function output() {
      if (remove().length == 0)
        return [" "];
      else
        return remove();
    }
    console.log(output().join(","));
    //
  }
});
