var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/stepwise_word/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length; iter++) {
    //
    function longestWord(line) {
      var str = line.split(" ");
      var word = "";
      str.forEach(function(string) {
        if (word.length < string.length) {
          word = string;
        }
      })
      return word;
    }

    function stepwiseWord() {
      var word = longestWord(lines[iter]);
      var output = [];
      for (var i = 0; i < word.length; i++) {
        var stars = word[i];
        for (var y = 0; y < i; y++) {
          stars += "*";
        }
        output.push(stars);
      }
      return output.join(" ")
    }
    console.log(stepwiseWord());
    //
  }
});
