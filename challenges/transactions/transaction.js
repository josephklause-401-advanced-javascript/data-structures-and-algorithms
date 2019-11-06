module.exports = (data) => {

  return data.reduce((acc, transaction) => {

    const date = new Date(transaction.timestamp);
    const utcDate = date.toUTCString();
    const sliceDate = utcDate.slice(0, 16);

    const dateArray = sliceDate.split('');
    dateArray.splice(3, 1);
  
    const day = dateArray.splice(3, 3);
    dateArray.splice(7, 0, day[0]);
    dateArray.splice(8, 0, day[1]);
    dateArray.splice(9, 0, day[2]);

    const newDate = dateArray.join('');
  
    (acc[newDate]) ? acc[newDate] += transaction.price : acc[newDate] = transaction.price;

    return acc;

  }, {});

};

