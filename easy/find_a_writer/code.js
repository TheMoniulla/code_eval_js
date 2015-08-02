var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/find_a_writer/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //
    var line = lines[iter].split("| ");

    function parsedNumbers(){
      return line[1].split(" ").map(function(num){
        return parseInt(num)
      });
    };

    function decypher() {
      return parsedNumbers().map(function(num){
        return line[0][num - 1]
      }).join('')
    }

    console.log(decypher());
//end
  }
});
