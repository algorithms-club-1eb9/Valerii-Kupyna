const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
  });

  rl.question('Enter number: ', (value) => {
	console.log(findMagicNumbers(+value));
	rl.close();
});

function findMagicNumbers(inputValue) {
  const numbers = [];
  
  for (let i = 1; i < 82; i++) {
    const current = inputValue - i;

    if (current <= 0) {
      continue;
    }

    const sum = findSumOfDigits(current);

    if (sum + current === inputValue) {
      numbers.push(current);
    }
  }

  return numbers;
}

function findSumOfDigits(num) {
    const digits = String(num)
      .split('')
      .map(function(digit) {
        return Number(digit);
      });

    const sumOfDigits = digits.reduce(function(sum, digit) {
      return sum + digit;
    }, 0);

    return sumOfDigits;
  }