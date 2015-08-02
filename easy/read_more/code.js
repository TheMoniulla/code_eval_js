var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/read_more/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter];

    function addReadMore(string) {
      text = string.slice(0, 40);
      array = text.split(' ');
      text = array.slice(0, -1).join(' ');
      return text += "... <Read More>";
    }

    function result(string) {
      if (string.length <= 55) {
        return text = string;
      } else {
        return text = addReadMore(string);
      }
    }
    console.log(result(line));

    //end
  }
});
