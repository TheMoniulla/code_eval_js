var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/the_major_element/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(",").sort();

    var result = {};
    var output = "";

    line.forEach(function(element) {
      if (!result[element])
        result[element] = 0;
      result[element]++;

      if (result[element] > line.length / 2) {
        output = [element].join();
      }
    })

    if (output == "")
      output = "None";

    console.log(output);
    //end
  }
});
