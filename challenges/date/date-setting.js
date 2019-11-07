module.exports = (date, diff) => {
  const dateCopy = new Date(date);
  const dateNum = Number(dateCopy);

  const diffNum = Number(diff.match(/[0-9]/gi));
  const diffLetter = diff.match(/([a-z, A-Z]|[^0-9, |])/gi)[0];
 
  const getMonth = dateCopy.getMonth();
  const getYear = 1900 + dateCopy.getYear();
  

  const conversion = {
    s: () => 1000,
    m: () => 60000,
    h: () => 3600000,
    w: () => 604800000,
    d: () => 86400000,
    M: () => dateCopy.setMonth(getMonth + diffNum),
    y: () => dateCopy.setYear(getYear + diffNum)
  };

  if(typeof diffNum !== 'number') return null;
  if(conversion[diffLetter] === undefined) return null;


  if(diffLetter === 'M' || diffLetter === 'y') {
    const newTimestamp = conversion[diffLetter]();
    return new Date(newTimestamp);
  } 

  return new Date(dateNum + (diffNum * conversion[diffLetter]()));
};