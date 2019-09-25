const { LinkedList } = require('../linkedList/linked-list');

function mergeList(listOne, listTwo) {
  
  const combinedList = new LinkedList;

  let listOneCount = listOne.size - 1;
  let listTwoCount = listTwo.size - 1;
  let flag = true;

  while(listOneCount >= 0 && listTwoCount >= 0) {

    if(flag) {
      const value = listOne.valueFromEnd(listOneCount);
      combinedList.insert(value);
      listOneCount--;
      flag = false;
    } 

    else if(!flag) {
      const value = listTwo.valueFromEnd(listTwoCount);
      combinedList.insert(value);
      listTwoCount--;
      flag = true;
    }
  } 
  
  while(listOneCount >= 0 && listTwoCount < 0){
    const value = listOne.valueFromEnd(listOneCount);
    combinedList.insert(value);
    listOneCount--;
  } 
  
  while(listTwoCount >= 0 && listOneCount < 0) {
    const value = listTwo.valueFromEnd(listTwoCount);
    combinedList.insert(value);
    listTwoCount--;
  }
  return combinedList.head;
}

module.exports = mergeList;