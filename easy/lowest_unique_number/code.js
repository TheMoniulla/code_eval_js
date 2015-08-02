var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/lowest_unique_number/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //
    var line = lines[iter].split(" ");

    function duplications() {
      var duplication = [];
      for (var i = 0; i < line.length; i++) {
        for (var j = 0; j < line.length; j++) {
          if (line[i] == line[j] && i != j) {
            duplication.push(line[i]);
          }
        }
      }
      return duplication;
    }

    function unique() {
      return line.filter(function(number) {
        return duplications().indexOf(number) == -1;
      });
    }

    function positionOfLowestUniqueNumber() {
      if (unique().length == 0)
        return 0;
      var lowestNumber = unique()[0];
      unique().forEach(function(number) {
        if (number < lowestNumber)
          lowestNumber = number;
      });
      return line.indexOf(lowestNumber) + 1;
    }

    console.log(positionOfLowestUniqueNumber());
    //end
  }
});
