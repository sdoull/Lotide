const tail = function(arr) {
  
  return arr.slice(1);
};
  

const passed = "😍";
const failed = "🤬";

const assertEqual = function(actual, expected) {
  if (actual === expected)   {
    console.log(`${passed}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["Hi", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const testTailEmptyArray = function() {
  const originalArray = [];
  const result = tail(originalArray);
  assertEqual(result.length, 0);
};