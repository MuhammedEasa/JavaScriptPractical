function add(x) {
  return function (y) {
    return x + y;
  };
}

const addTwo = add(2);

console.log(addTwo(3));
//callback function


// Function that takes a callback
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  // Execute the callback function
  callback();
}

// Callback function
function farewell() {
  console.log("Goodbye!");
}

// Calling the function with a callback
greet("John", farewell);
// Function with nested callbacks
function stepOne(callback) {
  setTimeout(function() {
    console.log("Step One completed!");
    callback();
  }, 1000);
}

// Callback function for Step Two
function stepTwo(callback) {
  setTimeout(function() {
    console.log("Step Two completed!");
    callback();
  }, 1500);
}

// Callback function for Step Three
function stepThree(callback) {
  setTimeout(function() {
    console.log("Step Three completed!");
    callback();
  }, 2000);
}

// Nested callback structure
stepOne(function() {
  stepTwo(function() {
    stepThree(function() {
      console.log("All steps completed!");
    });
  });
});
