const passed = "😍";
const failed = "🤬";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${passed} Assertion Passed: Arrays are equal.`);
  } else {
    console.log(`${failed} Assertion Failed: Arrays are not equal.`);
  }
};

// Test cases (You can visually inspect the console output)
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should fail
// console.log(`${passed} Assertion Passed: ${array1} === ${array2}`);

const passed = "😍";
const failed = "🤬";

const assertEqual = function(actual, expected) {
  if (actual === expected)   {
    console.log(`${passed}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(62, 102);


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
};
  
// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([1], [2]), false);
assertEqual(eqArrays(["apple", "banana", "cherry"], ["apple", "banana", "cherry"]), true);
assertEqual(eqArrays(["apple", "banana", "cherry"], ["apple", "banana", "kiwi"]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);