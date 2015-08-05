var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/hidden_digits/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var dictionary = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9
    };

    var line = lines[iter].match(/[a-j]|\d/g);

    function translator() {
      return line.map(function(element) {
        if (element.match(/[a-j]/))
          return dictionary[element]
        else
          return element
      }).join('')
    }

    if (line == null)
      console.log("NONE")
    else
      console.log(translator())
    //end
  }
});
