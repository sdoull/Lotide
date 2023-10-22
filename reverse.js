const reverseString = function(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
  

const args = process.argv.slice(2);
  

for (const arg of args) {
  const reversedString = reverseString(arg);
  console.log(reversedString);
}