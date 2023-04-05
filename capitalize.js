function capitalize(word) {
  const wordArray = [...word];

  let firstLetter = wordArray[0].toUpperCase();

  let newArray = firstLetter + word.slice(1);

  return newArray;
}

module.exports = capitalize;
