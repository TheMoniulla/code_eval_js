var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/age_distribution/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    function ageDistribution(line) {
      if (line >= 0 && line <= 2) {
        return "Still in Mama's arms";
      } else if (line >= 3 && line <= 4) {
        return "Preschool Maniac"
      } else if (line >= 5 && line <= 11) {
        return "Elementary School"
      } else if (line >= 12 && line <= 14) {
        return "Middle School"
      } else if (line >= 15 && line <= 18) {
        return "High School"
      } else if (line >= 19 && line <= 22) {
        return "College"
      } else if (line >= 23 && line <= 65) {
        return "Working for the man"
      } else if (line >= 66 && line <= 100) {
        return "The Golden Years"
      } else {
        return "This program is for humans"
      }
    }
    var line = parseInt(lines[iter].trim())
    console.log(ageDistribution(line));
    //end
  }
});
