const input = [1, 2, 3, 4, 5, 6];

function reverseArray(array){
  const length = array.length - 1;
  const resultArray = [];
  for(let i = length; i >= 0; i--) {
    resultArray.push(array[i])
  }
  return resultArray;
}