var fs = require("fs");
fs.readFile("/Users/irek/Desktop/code_eval_js/easy/delta_time/input.txt", "utf8", function(err, data) {
  var lines = data.split('\n');
  for (var iter = 0; iter < lines.length - 1; iter++) {
    //begin
    var line = lines[iter].split(' ');

    function firstTime() {
      return line[0].split(':');
    };

    function secondTime() {
      return line[1].split(':');
    };

    function hours(time) {
      return parseInt(time[0]);
    };

    function minutes(time) {
      return parseInt(time[1]);
    };

    function seconds(time) {
      return parseInt(time[2]);
    };

    function timeInSeconds(time) {
      return hours(time) * 60 * 60 + minutes(time) * 60 + seconds(time);
    }

    var timeDifference = Math.abs(timeInSeconds(firstTime()) - timeInSeconds(secondTime()));
    var s = timeDifference % 60;
    var m = (timeDifference % 3600 - s) / 60;
    var h = (timeDifference - timeDifference % 3600) / 3600;

    function timeToString(hours, minutes, seconds) {
      var array = [hours.toString(), minutes.toString(), seconds.toString()];
      for (var i = 0; i < array.length; i++) {
        if (array[i].length < 2) {
          array[i] = "0" + array[i];
        }
      };
      return array.join(':');
    };

    console.log(timeToString(h, m, s));
    //end
  }
});
