const passed = "😍 passes";
const failed = "🤬 failed";

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

const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }

  if (length % 2 === 1) {
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  }

  const middleIndex = length / 2;
  return [array[middleIndex - 1], array[middleIndex]];
};

// Test cases for the middle function
assertArraysEqual(middle([1]), []); // Should pass
assertArraysEqual(middle([1, 2]), []); // Should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass


