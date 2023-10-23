const originalWords = process.argv.slice(2);
let pigLatinWords = [];

for (let i = 0; i < originalWords.length; i++) {
  const word = originalWords[i];
  pigLatinWords.push(word.slice(1, word.length) + word[0] + "ay");

}
console.log("pigLatinWords3", pigLatinWords.join(" "));

// DRIVER CODE
// node pig-latin.js pig latin
// igpay atinlay

// node pig-latin.js this is all just gibberish
// histay siay llaay ustjay ibberishgay