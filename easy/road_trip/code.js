var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/road_trip/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter];

    function numbers() {
      return line.match(/\d+/g).map(function(number) {
        return parseInt(number)
      }).sort(function(a, b) {
        return a - b
      });
    };

    function distances() {
      var array = numbers();
      var result = [];
      result.push(array[0]);
      for (var i = 0; i < array.length - 1; i++) {
        result.push(array[i + 1] - array[i]);
      }
      return result.join(",");
    }

    console.log(distances());
    //end
  }
});
