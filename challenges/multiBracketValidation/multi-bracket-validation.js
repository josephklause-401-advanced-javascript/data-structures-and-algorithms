function multiBracketValidation(string) {
  
  let openParensCount = 0;
  let closeParensCount = 0;
  let openCurlyCount = 0;
  let closeCurlyCount = 0;
  let openSquareCount = 0;
  let closeSquareCount = 0;


  for(let i = 0; i < string.length; i++) {

    switch(string.charAt(i)) {
      case '(':
        openParensCount++;
        break;
      case ')':
        closeParensCount++;
        break;
      case '{':
        openCurlyCount++;
        break;
      case '}':
        closeCurlyCount++;
        break;

      case '[':
        openSquareCount++;
        break;
      case ']':
        closeSquareCount++;
        break;
    }

    if((openParensCount === 0 && closeParensCount === 1) ||
    (openCurlyCount === 0 && closeCurlyCount === 1) ||
    (openSquareCount === 0 && closeSquareCount === 1)) {
      return false;
    }


  }
  if((openParensCount !== closeParensCount) ||
  (openCurlyCount !== closeCurlyCount) ||
  (openSquareCount !== closeSquareCount)) {
    return false;
  }

  return true;
}

module.exports = multiBracketValidation;