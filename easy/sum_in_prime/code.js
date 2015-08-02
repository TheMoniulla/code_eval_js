function prime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}

var sum = 0;
var count = 0;
var number = 1;

while (count < 1000) {
  number++;
  if (prime(number)) {
    sum += number;
    count++;
  }
}

console.log(sum);
