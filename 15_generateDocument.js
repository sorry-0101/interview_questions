console.log(generateDocument("abcabc", "aabbccc"));
console.log(generateDocument1("abcabc", "aabbccc"));

function generateDocument(characters, document) {
  let characterMap = {};
  for (const itm of characters) {
    if (!(itm in characterMap)) {
      characterMap[itm] = 0;
    }
    characterMap[itm]++;
  }

  for (const itm of document) {
    if (!(itm in characterMap) || characterMap[itm] === 0) {
      return false;
    }
    characterMap[itm]--;
  }
  console.log(characterMap);
  return true;
}

// second method

function generateDocument1(characters, document) {
  for (const item of characters) {
    const charFrequency = getFrequency(item, document);
    const documentFrequency = getFrequency(item, characters);
    if (charFrequency < documentFrequency) {
      return true;
    }
  }
  return false;
}
function getFrequency(char, targetCharacters) {
  let frequency = 0;
  for (const itm of targetCharacters) {
    if (char === itm) {
      frequency++;
    }
  }
  return frequency;
}
