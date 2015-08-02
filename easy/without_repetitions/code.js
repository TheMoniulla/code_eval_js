var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/without_repetitions/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var array = lines[iter].split('');

    finish = false;
    while (finish == false) {
      finish = true;
      for (var i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
          array.splice(i, 1);
          finish = false;
        }
      }
    }
    console.log(array.join(''));
    //end
  }
});
