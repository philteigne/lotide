const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    let currentLetter = sentence[i];

    if (currentLetter === ' ') {  //  if i is a space ignore it
      continue;
    }

    if (!results[currentLetter]) {  //  if property does not exist create one
      results[currentLetter] = [];
    }

    results[currentLetter].push(i);

  }

  // logic to update results here
  return results;
};

module.exports = letterPositions;
