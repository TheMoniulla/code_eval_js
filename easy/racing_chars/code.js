var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/racing_chars/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  lastMove = null
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split('');

    function choseMove(lastMove, currentMove) {
      if (lastMove == null || lastMove == currentMove)
        return '|';
      else if (lastMove > currentMove)
        return '/';
      else if (lastMove < currentMove)
        return '\\';
    };

    if (line.indexOf('C') != -1)
      position = line.indexOf('C');
    else
      position = line.indexOf('_');
    currentMove = position;
    line[position] = choseMove(lastMove, currentMove);
    lastMove = position;

    console.log(line.join(''));
    //end
  }
});
