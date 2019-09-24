const { LinkedList } = require('../linkedList/linked-list');

function mergeList(listOne, listTwo) {
  const combinedList = new LinkedList;
  let listOneCount = listOne.size - 1;
  let listTwoCount = listTwo.size - 1;

  if(listOneCount >= 0 && listTwoCount >= 0) {

    let flag = true;

    if(flag) {
      const value = listOne.valueFromEnd(listOneCount);
      combinedList.insert(value);
      listOneCount--;
      flag = false;
    } 

    else {
      const value = listTwo.valueFromEnd(listTwoCount);
      combinedList.insert(value);
      listTwoCount--;
      flag = true;
    }

  } 
  
  else if(listOneCount >= 0 && listTwoCount < 0){
    const value = listOne.valueFromEnd(listOneCount);
    combinedList.insert(value);
    listOneCount--;
  } 
  
  else if(listTwoCount < 0 && listOneCount < 0) {
    const value = listTwo.valueFromEnd(listTwoCount);
    combinedList.insert(value);
    listTwoCount--;
  }
  return combinedList.head;
}

module.exports = mergeList;