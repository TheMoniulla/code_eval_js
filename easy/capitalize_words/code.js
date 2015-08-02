var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/capitalize_words/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    function capitalizeWords(array) {
      return array.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
    };
    var line = lines[iter].split(" ");
    console.log(capitalizeWords(line));
    //end
  }
});
