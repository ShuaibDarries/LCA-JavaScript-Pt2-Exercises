// Multiline string using template literals.
const multilineString = `This is a multiline string.
It can span multiple lines without needing concatenation.
This is useful for formatting text in a more readable way.`;
console.log(multilineString);

// Function that uses template literals for HTML generation.
const generateHTML = (title, content) => {
  return `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>
        <p>${content}</p>
      </body>
    </html>
  `;
};

console.log(generateHTML("My Page", "This is the page content."));

// Converting regular functions to arrow functions.
// Regular function
function add(a, b) {
  return a + b;
}
// Arrow function
const addArrow = (a, b) => a + b;
console.log("Regular add:", add(2, 3));
console.log("Arrow add:", addArrow(2, 3));

// Using arrow functions with array methods.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
console.log("Doubled Numbers:", doubled);
