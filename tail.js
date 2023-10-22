const tail = function(arr) {
  if (arr.length > 1) {
    return arr.slice(1);
  }
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

