var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/json_menu_ids/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = JSON.parse(lines[iter]);
    var array = line.menu.items;

    function hashesWithLabel() {
      return array.filter(function(menu) {
        return menu != null && menu.label;
      });
    };

    function sumOfIds() {
      return hashesWithLabel().reduce(function(sum, ids) {
        return sum + ids.id;
      }, 0);
    }
    console.log(sumOfIds(array));
    //end
  }
});
