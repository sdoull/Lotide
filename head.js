const head = function(arr) {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
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

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(62, 102);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");