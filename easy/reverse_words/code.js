var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/reverse_words/input.txt","utf8",function(err,data){
  var lines = data.split('\n');
  for(var iter = 0; iter < lines.length-1; iter++){
//begin
  console.log(lines[iter].split(" ").reverse().join(" "));
//end
  }
});
