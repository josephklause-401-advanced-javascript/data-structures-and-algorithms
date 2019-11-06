function binarySearch(array, key) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while(startIndex <= endIndex){
    let midPoint = Math.floor((startIndex + endIndex) / 2);

    if(key === array[midPoint]) {
      return midPoint;
    } 
    else if(key > array[midPoint]) {
      startIndex = midPoint + 1;
    }
    else if(key < array[midPoint]) {
      endIndex = midPoint - 1;
    }
  } return -1;
}

module.exports = binarySearch;