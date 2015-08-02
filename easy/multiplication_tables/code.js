function numberWithSpaces(number) {
  if (number < 10)
    return "   " + number
  else if (number < 100)
    return "  " + number
  else
    return " " + number

}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (var x = 1; x <= array.length; x++) {
  var output = [];
  for (var y = 1; y <= array.length; y++) {
    output.push(numberWithSpaces(x * y));
  }

  console.log(output.join("").trim());
}
