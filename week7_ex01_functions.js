// 1. Multiply 3 different numbers
function multiply(a, b, c) {
  if (a === b || b === c || a === c) {
    return "Error: Arguments must not be the same number";
  }
  return a * b * c;
}

// 2. Convert minutes to seconds (function expression)
const convertToSeconds = function (minutes) {
  return minutes * 60;
};

// 3. Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// 4. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 5. Count vowels in a string
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// 6. Check if a number is prime (with tests)
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// Test isPrime with 4 numbers
console.log(isPrime(2)); // true
console.log(isPrime(17)); // true
console.log(isPrime(4)); // false
console.log(isPrime(1)); // false
