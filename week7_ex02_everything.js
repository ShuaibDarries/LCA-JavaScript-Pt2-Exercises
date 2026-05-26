// 1. SUM FUNCTION

function sum(n) {
  // Check if parameter is a number first
  if (typeof n !== "number" || isNaN(n)) {
    return "The value passed is not a number";
  }

  // Check if it's an integer (without using Number.isInteger or regex)
  // We check if the number minus its floored version equals 0
  if (Math.floor(n) !== n) {
    return "The value passed is not a number";
  }

  // Calculate sum from 0 to n
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// Test sum function
console.log("--- SUM FUNCTION ---");
console.log(sum(5)); // 15 (0+1+2+3+4+5)
console.log(sum(10)); // 55
console.log(sum("hello")); // "The value passed is not a number"
console.log(sum(3.5)); // "The value passed is not a number"
console.log(sum(null)); // "The value passed is not a number"

// 2. FACTORIAL FUNCTION

function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  // Print the pattern as shown in the example
  let pattern = "";
  for (let i = n; i >= 1; i--) {
    pattern += i;
    if (i > 1) pattern += "*";
  }
  console.log(`${pattern} which equals ${result}`);
  return result;
}

// Test factorial
console.log("\n--- FACTORIAL FUNCTION ---");
factorial(4); // 4*3*2*1 which equals 24
factorial(5); // 5*4*3*2*1 which equals 120

// 3. FUNKY MATH FUNCTION

function funkyMath() {
  const args = arguments;

  if (args.length === 2) {
    // Subtract first from second
    return args[1] - args[0];
  } else if (args.length === 3) {
    // Add all 3 together
    return args[0] + args[1] + args[2];
  } else if (args.length === 4) {
    // (arg1 + arg2) / (arg3 + arg4)
    return (args[0] + args[1]) / (args[2] + args[3]);
  }
}

// Test funkyMath
console.log("\n--- FUNKY MATH ---");
console.log(funkyMath(8, 2, 3, 5)); // 1.25  ((8+2)/(3+5))
console.log(funkyMath(10, 5)); // -5    (5-10)
console.log(funkyMath(1, 2, 3)); // 6     (1+2+3)

// 4. REMOVE ODD NUMBERS & SORT

let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
    numbers.splice(i, 1);
    i--; // Adjust index since we removed an element
  }
}

// Bonus: Sort odd numbers from smallest to biggest
oddNumbers.sort((a, b) => a - b);

console.log("\n--- ODD NUMBERS REMOVED & SORTED ---");
console.log("Even numbers remaining:", numbers); // [2, 6, 44]
console.log("Odd numbers (sorted):", oddNumbers); // [1, 33, 45]

// 5, 6, 7. OBJECT OPERATIONS

// Create the object
let me = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  favouriteColour: "blue",
  dreamCar: "Tesla Model S",
};

console.log("\n--- OBJECT OPERATIONS ---");
console.log("Original object:", me);

// Add favourite food property
me.favouriteFood = "Pizza";

// Delete age property
delete me.age;

console.log("Modified object:", me);
