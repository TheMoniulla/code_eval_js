var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/clean_up_elements/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length; iter++) {
    //begin
    function cleanUpElements(line) {
      var output = "";
      for (var i = 0; i < line.length; i++) {
        if (line[i].match(/[a-zA-z]/)) {
          output += line[i].toLowerCase();
        } else {
          output += " ";
        }
      }
      return output;
    };

    function replaceAndTrim() {
      return cleanUpElements(lines[iter]).replace(/\s+/g, " ").trim();
    };
    console.log(replaceAndTrim());
    //end
  }
});
