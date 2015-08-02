var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/knight_moves/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter];
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
    var val1 = letters.indexOf(line[0]);
    var val2 = numbers.indexOf(line[1]);

    vectors = [
      [2, 1],
      [2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [-2, 1],
      [-2, -1]
    ]

    function allMoves() {
      return vectors.map(function(vector) {
        return letters[val1 - vector[0]] + numbers[val2 - vector[1]];
      })
    }

    function rightMoves() {
      return allMoves().filter(function(move) {
        return move.length == 2
      }).join(' ')
    }

    console.log(rightMoves());
    //end
  }
});
