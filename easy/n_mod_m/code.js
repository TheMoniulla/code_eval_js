var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/n_mod_m/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //
    var line = lines[iter].split(",");

    var n = parseInt(line[0]);
    var m = parseInt(line[1]);

    function modulo(n, m) {
      if (n < m) {
        n = 0;
      }
      while (n > m) {
        n = n - m;
      }
      return n;
    }

    console.log(modulo(n, m));


    //end
  }
});
