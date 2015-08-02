var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/multiples_of_a_number/input.txt","utf8",function(err,data){
  var lines = data.split('\n');
  for(var iter = 0; iter < lines.length-1; iter++){
//begin
var line = lines[iter].split(",");

var x = parseInt(line[0]);
var n = parseInt(line[1]);
function multiplier(x,n) {
  while (n < x) {
    n = n * 2;
  } return n;
};

console.log(multiplier(x,n));

//end
  }
});
