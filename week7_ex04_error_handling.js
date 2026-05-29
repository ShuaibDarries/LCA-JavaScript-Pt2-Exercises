// Function that validates user input.
function validateUserInput(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string.");
  }
  if (input.trim() === "") {
    throw new Error("Input cannot be empty.");
  }
  return input.trim();
}

// Function that demonstrates multiple error types.
function demonstrateMultipleErrors(input) {
  try {
    // Validate input (may throw an error)
    const validatedInput = validateUserInput(input);
    console.log("Validated Input:", validatedInput);
    // Simulate a reference error    console.log(nonExistentVariable);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error("Reference Error Caught:", error.message);
    } else if (error instanceof TypeError) {
      console.error("Type Error Caught:", error.message);
    } else {
      console.error("General Error Caught:", error.message);
    }
  }
}

// Collection of helper functions for string manipulation.
const StringUtils = {
  toUpperCase: function (str) {
    if (typeof str !== "string") {
      throw new TypeError("Input must be a string.");
    }
    return str.toUpperCase();
  },

  toLowerCase: function (str) {
    if (typeof str !== "string") {
      throw new TypeError("Input must be a string.");
    }
    return str.toLowerCase();
  },

  reverseString: function (str) {
    if (typeof str !== "string") {
      throw new TypeError("Input must be a string.");
    }
    return str.split("").reverse().join("");
  },
};

// Helper functions for array operations.
const ArrayUtils = {
  sumArray: function (arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError("Input must be an array.");
    }
    return arr.reduce((sum, num) => sum + num, 0);
  },
};
