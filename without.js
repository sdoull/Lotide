// Function to remove unwanted elements from a source array
const without = function(source, itemsToRemove) {
  let result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
  
// Function to assert if two arrays are equal
const assertArraysEqual = function(actual, expected) {
  const passed = "😍";
  const failed = "🤬";
  if (eqArrays(actual, expected)) {
    console.log(`${passed} Assertion Passed: Arrays are equal.`);
  } else {
    console.log(`${failed} Assertion Failed: Arrays are not equal.`);
  }
};
  
// Function to check if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
  
// Test cases
  
// Test case 1
const result1 = without([1, 2, 3], [1]);
assertArraysEqual(result1, [2, 3]);
  
// Test case 2
const result2 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]);
  
// Test case 3 (Original array should not be modified)
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // This should pass
  
// Additional test cases
const result3 = without([1, 2, 3, 4, 5], [3, 5]);
assertArraysEqual(result3, [1, 2, 4]);
  
const result4 = without([1, 2, 3, 4], []);
assertArraysEqual(result4, [1, 2, 3, 4]);
  
const result5 = without([], [1, 2, 3]);
assertArraysEqual(result5, []);
  