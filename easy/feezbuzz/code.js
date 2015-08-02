var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/feezbuzz/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length; iter++) {
    //begin
    var line = lines[iter].split(" ");

    function feezBuzz() {
      array = [];
      for (var i = 1; i <= line[2]; i++) {
        if (i % line[0] == 0 && i % line[1] == 0)
          text = "FB"
        else if (i % line[0] == 0)
          text = "F"
        else if (i % line[1] == 0)
          text = "B"
        else
          text = i
        array.push(text);
      }
      return array.join(" ");
    };
    console.log(feezBuzz());
    //end
  }
});
