// 1. Global Variable
// TODO: Create a global variable called globalCount.
let globalCount = 0; // Global scope - accessible everywhere

// 2. Local Scope Demonstration
// TODO: Create a function that demonstrates local scope.
function demonstrateLocalScope() {
  let localCount = 10;
  console.log("Inside function - localCount:", localCount);
  console.log("Inside function - globalCount:", globalCount);
  return localCount;
}

// 3. Modifying Both Variables
// TODO: Create a function that tries to modify both variables.
function modifyBothVariables() {
  // Modify the global variable (no 'let'/'const' - refers to existing global)
  globalCount += 5;
  console.log("Modified globalCount to:", globalCount);

  // Try to create a local variable with the same name (shadowing)
  let globalCount = 100;
  console.log("Local shadow globalCount:", globalCount);

  // Local variable
  let localCount = 20;
  localCount += 10;
  console.log("Modified localCount to:", localCount);

  // Demonstrate that local changes don't affect outside
  return { globalCount, localCount };
}

// 4. Student Constructor Function
// TODO: Create a Student constructor function.
function Student(name, age, grade) {
  // Properties assigned to each instance
  this.name = name;
  this.age = age;
  this.grade = grade;

  // Method defined inside constructor (not shared)
  this.introduce = function () {
    return `Hi, I'm ${this.name}, ${this.age} years old, and I'm in grade ${this.grade}.`;
  };
}

// Add method via prototype (shared by all instances)
Student.prototype.study = function (subject) {
  return `${this.name} is studying ${subject}.`;
};

// Static property (belongs to constructor, not instances)
Student.schoolName = "JavaScript Academy";

// 5. Create Several Student Instances
// TODO: Create several student instances.
const student1 = new Student("Moe", 18, 12);
const student2 = new Student("Daifa", 17, 11);
const student3 = new Student("Zaad", 16, 10);

// 6. Object Literal with Nested Properties
// TODO: Create an object literal with nested properties.
const school = {
  name: "Tech High School",
  location: {
    city: "San Francisco",
    state: "California",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194,
    },
  },
  departments: {
    science: {
      head: "Dr. Smith",
      subjects: ["Physics", "Chemistry", "Biology"],
      budget: 50000,
    },
    arts: {
      head: "Ms. Johnson",
      subjects: ["Music", "Painting", "Drama"],
      budget: 30000,
    },
  },
  students: [student1, student2, student3],
  getTotalBudget: function () {
    return this.departments.science.budget + this.departments.arts.budget;
  },
  getAddress: function () {
    return `${this.name}, ${this.location.city}, ${this.location.state}`;
  },
};
