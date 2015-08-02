
var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/lowercase/input.txt","utf8",function(err,data){
  var lines = data.split('\n');
  for(var iter = 0; iter < lines.length; iter++){
//begin
var line = lines[iter];

console.log(line.toLowerCase());

//end
  }
});
