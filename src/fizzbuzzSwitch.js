function fizzbuzzSwitch(num) {
  let x = num % 5 === 0 && num % 3 === 0;
  let y = num % 5 === 0;
  let z = num % 3 === 0;
  switch (true) {
    case x:
      return "FizzBuzz";
    case z:
      return "Fizz";
    case y:
      return "Buzz";
    default:
      return num;
  }
}

module.exports = fizzbuzzSwitch;
