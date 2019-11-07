
function leftJoin(leftHT, rightHT) {
  const leftHTPairs = leftHT.arr.reduce((acc, bucket) => {
    if(bucket.length > 0) {
      bucket.forEach(pair => acc.push(pair));
      return acc;
    }
    return acc;
  }, []);


  return leftHTPairs.reduce((acc, pair) => {

    let rightHTValue = rightHT.get(pair[0]);
    if(rightHTValue) pair.push(rightHTValue);
    else pair.push(null);
  
    acc.push(pair);
    
    return acc;
  }, []);

  // const result = leftHTPairs.map(pair => {
  //   let rightHTValue = rightHT.get(pair[0]);
  //   if(rightHTValue) {
  //     console.log(pair);
  //     pair.push(rightHTValue);
  //     console.log(pair);
  //   }
  //   else pair.push(null);
  // });
  // console.log(result)
}

module.exports = {
  leftJoin
};
