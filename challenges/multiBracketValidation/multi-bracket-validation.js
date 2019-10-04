function multiBracketValidation(string) {
  
  let openParensCount = 0;
  let closeParensCount = 0;
  let openCurlyCount = 0;
  let closeCurlyCount = 0;
  let openSquareCount = 0;
  let closeSquareCount = 0;

  let parensOpenParensCount = 0;
  let parensCloseParensCount = 0;
  let parensOpenCurlyCount = 0;
  let parensCloseCurlyCount = 0;
  let parensOpenSquareCount = 0;
  let parensCloseSquareCount = 0;

  let curlyOpenParensCount = 0;
  let curlyCloseParensCount = 0;
  let curlyOpenCurlyCount = 0;
  let curlyCloseCurlyCount = 0;
  let curlyOpenSquareCount = 0;
  let curlyCloseSquareCount = 0;


  let squareOpenParensCount = 0;
  let squareCloseParensCount = 0;
  let squareOpenCurlyCount = 0;
  let squareCloseCurlyCount = 0;
  let squareOpenSquareCount = 0;
  let squareCloseSquareCount = 0;


  for(let i = 0; i < string.length; i++) {

    switch(string.charAt(i)) {
      case '(':
        openParensCount++;
        break;
      case ')':
        closeParensCount++;
        console.log('ding');
        if(openParensCount === 0 && closeParensCount === 1) {
          return false;
        }
        break;
      case '{':
        openCurlyCount++;
        break;
      case '}':
        closeCurlyCount++;
        if(openCurlyCount === 0 && closeCurlyCount === 1) {
          return false;
        }
        break;
      case '[':
        openSquareCount++;
        break;
      case ']':
        closeSquareCount++;
        if(openSquareCount === 0 && closeSquareCount === 1){
          return false;
        }
        break;
    }


    if(openParensCount > closeParensCount) {

      switch(string.charAt(i)) {
        case '(':
          openParensCount++;
          parensOpenParensCount++;
          break;
        case ')':
          closeParensCount++;
          parensCloseParensCount++;
          break;
        case '{':
          openCurlyCount++;
          parensOpenCurlyCount++;
          break;
        case '}':
          closeCurlyCount++;
          parensCloseCurlyCount++;
          break;
        case '[':
          openSquareCount++;
          parensOpenSquareCount++;
          break;
        case ']':
          closeSquareCount++;
          parensCloseSquareCount++;
          break;
      }

      if(((parensOpenCurlyCount !== parensCloseCurlyCount) || 
          (parensOpenSquareCount !== parensCloseSquareCount)) &&
          (parensOpenParensCount + 1 === parensCloseParensCount)) {

        return false;
      }
    }

    if(openCurlyCount > closeCurlyCount) {

      switch(string.charAt(i)) {
        case '(':
          openParensCount++;
          curlyOpenParensCount++;
          break;
        case ')':
          closeParensCount++;
          curlyCloseParensCount++;
          break;
        case '{':
          openCurlyCount++;
          curlyOpenCurlyCount++;
          break;
        case '}':
          closeCurlyCount++;
          curlyCloseCurlyCount++;
          break;
        case '[':
          openSquareCount++;
          curlyOpenSquareCount++;
          break;
        case ']':
          closeSquareCount++;
          curlyCloseSquareCount++;
          break;
      }

      if(((curlyOpenParensCount !== curlyCloseParensCount) || 
          (curlyOpenSquareCount !== curlyCloseSquareCount)) &&
          (curlyOpenCurlyCount + 1 === curlyCloseCurlyCount)) {

        return false;
      }

    }



    if(openSquareCount > closeSquareCount) {


      switch(string.charAt(i)) {
        case '(':
          openParensCount++;
          squareOpenParensCount++;
          break;
        case ')':
          closeParensCount++;
          squareCloseParensCount++;
          break;
        case '{':
          openCurlyCount++;
          squareOpenCurlyCount++;
          break;
        case '}':
          closeCurlyCount++;
          squareCloseCurlyCount++;
          break;
        case '[':
          openSquareCount++;
          squareOpenSquareCount++;
          break;
        case ']':
          closeSquareCount++;
          squareCloseSquareCount++;
          break;
      }

      if(((squareOpenParensCount !== squareCloseParensCount) || 
          (squareOpenCurlyCount !== squareCloseCurlyCount)) &&
          (squareOpenSquareCount + 1 === squareCloseSquareCount)) {

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
}

module.exports = multiBracketValidation;