
const mergeSort = (arr) => {
  
  let n = arr.length;

  if(n > 1) {
    let mid = Math.floor(n / 2);
    let left = [];
    for(let i = 0; i < mid; i++) {
      left.push(arr[i]);
    }
    let right = [];
    for(let i = mid; i < n; i++) {
      right.push(arr[i]);
    }
    
    mergeSort(left);
    mergeSort(right); 
    merge(left, right, arr);
  }
};

const merge = (left, right, arr) => {
  
  
  
  let i = 0;
  let j = 0;
  let k = 0;
  
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  
  if(i === left.length) arr.splice(k, arr.length - k, ...right.slice(j));
  if(j === right.length) arr.splice(k, arr.length - k, ...left.slice(i));
  
};

module.exports = {
  mergeSort
};



// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length
//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0
//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
//         k <-- k + 1
//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left