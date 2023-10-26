for (let i = 100; i <= 200; i++) {
  let divisibleByThree = i % 3 === 0;
  let divisibleByFour = i % 4 === 0;
    
  console.log(
    divisibleByThree && divisibleByFour
      ? "LoopyLighthouse"
      : divisibleByThree
        ? "Loopy"
        : divisibleByFour
          ? "Lighthouse" : i);
}