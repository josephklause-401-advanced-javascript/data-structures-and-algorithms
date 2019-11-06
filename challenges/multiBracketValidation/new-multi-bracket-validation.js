function multiBracketValidation(string) {

  const resultArray = [];

  const key = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  
  for(let i = 0; i < string.length; i++) {

    const openComparisons = string[i] === '(' || string[i] === '{' || string[i] === '[';
    const closeComparisons = string[i] === ')' || string[i] === '}' || string[i] === ']';

    if(openComparisons) {
      resultArray.push(string[i]);  
    } 
    else if(closeComparisons) {
      const lastOpenBracket = resultArray.pop();

      if(string[i] !== key[lastOpenBracket]) {
        return false;
      }

    }
  }

  if(resultArray.length !== 0) {
    return false;
  }
  return true;
}


module.exports = multiBracketValidation;