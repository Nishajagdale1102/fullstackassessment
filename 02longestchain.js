const word = '00000111110101001111100001001';//declare and initialize the word
let maxChain = 0;//decalrae variables and initial value be zero
let currentChain = 0;

for (let i = 1; i < word.length; i++) {//use for loop for check the every value
  if (word[i] === word[i - 1]) { // check if the current character is the same as the previous character
    currentChain++; // if it is, increment the current chain length
  } else {//if the current charachter not same to previous then cursor move forward here
    maxChain = Math.max(maxChain, currentChain); // if it's not, update the max chain length with the current chain length if it's greater than the current max chain length
    currentChain = 1; // reset the current chain length to 1
  }
}

maxChain = Math.max(maxChain, currentChain); // update the max chain length with the current chain length if it's greater than the current max chain length

console.log(maxChain); // output the max chain length
