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

const flatten = function(arr) {
  let flattenedArray = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

// Test cases for the flatten function
const result1 = flatten([1, 2, [3, 4], 5, [6]]);
console.log(result1); // Should output [1, 2, 3, 4, 5, 6]

const result2 = flatten([1, [2, [3, 4], 5], [6, [7]]);
console.log(result2); // Should output [1, 2, [3, 4], 5, 6, [7]]

// Test cases for assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should fail

// Test cases for assertEqual
assertEqual("Lighthouse Labs", "Bootcamp"); // Should fail
assertEqual(1, 1); // Should pass
assertEqual("hello", "hello"); // Should pass
assertEqual(62, 102); // Should fail

// Test cases for eqArrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should fail

// Additional test cases can be added here
