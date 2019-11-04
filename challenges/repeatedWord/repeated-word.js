function repeatedFirstWord(text) {
  const lowerCaseString = text.toLowerCase();
  const wordArray = lowerCaseString.split(' ');
  const wordArrayNoPunc = wordArray.map(word => {
    return word.match(/([a-z])/gi).join('');
  });
  
  const letterCount = {};
  for(let i = 0; i < wordArrayNoPunc.length; i++) {
    if(letterCount[wordArrayNoPunc[i]]) return wordArrayNoPunc[i];
    letterCount[wordArrayNoPunc[i]] = 1;
  }
  return 'There is no word repeated';
}

function wordCount(text) {
  const lowerCaseString = text.toLowerCase();
  const wordArray = lowerCaseString.split(' ');

  return wordArray.map(word => {
    return word.match(/([a-z])/gi).join('');
  }).reduce((acc, word) => {
    if(acc[word]) acc[word]++;
    else acc[word] = 1;
    return acc;
  }, {});
}

function mostFrequentWords(text) {
  const lowerCaseString = text.toLowerCase();
  const wordArray = lowerCaseString.split(' ');
  const wordArrayNoPunc = wordArray.map(word => {
    return word.match(/([a-z])/gi).join('');
  });

  const wordCountArray = Object.entries(wordArrayNoPunc.reduce((acc, word) => {
    if(acc[word]) acc[word]++;
    else acc[word] = 1;
    return acc;
  }, {}));
  
  let compareNumber = wordCountArray[0][1];

  return wordCountArray.reduce((acc, entry) => {
    if(entry[1] === compareNumber) acc.push(entry[0]);
    if(entry[1] > compareNumber) {
      acc = [];
      acc.push(entry[0]);
      compareNumber = entry[1];
    }
    return acc;
  }, []);
}



module.exports = {
  repeatedFirstWord,
  wordCount,
  mostFrequentWords
};