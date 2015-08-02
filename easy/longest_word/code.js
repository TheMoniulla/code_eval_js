var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/longest_word/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length; iter++) {
    //begin
    var line = lines[iter].split(" ");

    function longestWord() {
      var longestWord = "";
      line.forEach(function(word) {
        if (longestWord.length < word.length)
          longestWord = word;
      });
      return longestWord;
    }

    console.log(longestWord());
    //end
  }
});
