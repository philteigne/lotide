// Given a sentence, count all letters in the sentence and return an object containing each letter's count.
const countLetters = function(sentenceToCount) {

  const resultObj = {};

  for (let i of sentenceToCount) {
    if (i === ' ') {  // do not count spaces
      continue;
    }

    if (!resultObj[i]) {  //  if property does not exist in resultObj create one
      resultObj[i] = 0;
    }

    resultObj[i] ++; //  Count instance of letter

  }

  return resultObj;

};

module.exports = countLetters;