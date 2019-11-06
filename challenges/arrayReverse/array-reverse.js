
function reverseArray(array){
  const length = array.length - 1;
  const resultArray = [];
  for(let i = length; i >= 0; i--) {
    resultArray[resultArray.length] = array[i];
  }
  return resultArray;
}

module.exports = reverseArray;