var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/split_the_number/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(" ");

    var string1 = line[0];
    var string2 = line[1];

    if (string2.match(/\-/)) {
      signPosition = string2.match(/\-/).index;
      console.log(parseInt(string1.slice(0, signPosition)) - parseInt(string1.slice(signPosition, string1.length)));
    } else if (string2.match(/\+/)) {
      signPosition = string2.match(/\+/).index;
      console.log(parseInt(string1.slice(0, signPosition)) + parseInt(string1.slice(signPosition, string1.length)));
    }
    //end
  }
});
