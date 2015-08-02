var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/swap_elements/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(":");
    var arg = line[1].split(",");
    var str = line[0].trim().split(" ");

    var array = str.map(function(number) {
      return parseInt(number);
    });

    arg.forEach(function(args) {
      arg2 = args.split("-");
      val1 = parseInt(arg2[0].trim());
      val2 = parseInt(arg2[1]);
      a = array[val1];
      array[val1] = array[val2];
      array[val2] = a;
    });

    console.log(array.join(" "));
    //end
  }
});
