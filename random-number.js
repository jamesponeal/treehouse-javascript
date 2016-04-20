function randomNumber(upper, lower) {
  var random = (Math.floor(Math.random() * (parseInt(upper) - parseInt(lower) + 1)) + parseInt(lower));
  return random;
}

var lowerLimit = prompt("Please enter LOWER limit for the random number:");
var upperLimit = prompt("Please enter UPPER limit for the random number:");

if (isNaN(lowerLimit) || isNaN(upperLimit)) {
  throw new Error('You have entered an invalid number!');
}


console.log(randomNumber(upperLimit, lowerLimit));
console.log(randomNumber(upperLimit, lowerLimit));
console.log(randomNumber(upperLimit, lowerLimit));

