function reverseString(word) {
  // decrementing loop into new array

  let wordArray = [...word];
  let newArray = [];

  for (let i = wordArray.length - 1; i >= 0; i--) {
    const currentIndex = wordArray[i];

    newArray.push(currentIndex);
  }

  // prettier-ignore
  let joinedArray = newArray.join("");
  return joinedArray;
}

module.exports = reverseString;
