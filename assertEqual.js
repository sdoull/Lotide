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











