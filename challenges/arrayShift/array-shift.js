function insertShiftArray(array, element) {
  const midPoint = Math.ceil(array.length / 2);
  const resultArray = [];
  for(let i = 0; i < midPoint; i++) {
    resultArray[resultArray.length] = array[i];
  }
  resultArray[resultArray.length] = element;

  for(let i = midPoint; i < array.length; i++) {
    resultArray[resultArray.length] = array[i];
  }
  return resultArray;
}
module.exports = insertShiftArray;
