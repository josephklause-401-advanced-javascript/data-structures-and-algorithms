module.exports = (date, diff) => {
  console.log(date);

  const diffNum = Number(diff.match(/[0-9]/gi));
  let diffLetter = diff.match(/([a-z, A-Z]|[^0-9, |])/gi)[0];

  const getSeconds = date.getSeconds();
  const getMinutes = date.getMinutes();
  console.log(getMinutes);
  const getHours = date.getHours();
  console.log(getHours);
  const getMonth = date.getMonth();
  console.log(getMonth);
  const getYear = 1900 + date.getYear();
  console.log(getYear);

  console.log(diffNum);

  const conversion = {
    s: date.setSeconds(getSeconds + diffNum),
    m: date.setMinutes(getMinutes + diffNum),
    h: date.setHours(getHours + diffNum),
    d: date.setHours(getHours + (diffNum * 24)),
    w: date.setHours(getHours + (diffNum * 168)),
    M: date.setMonth(getMonth + diffNum),
    y: date.setYear(getYear + diffNum)
  }; 


  if(typeof diffNum !== 'number') return null;
  if(conversion[diffLetter] === undefined) return null;

  const newTimestamp = conversion[diffLetter];
  const newDate = new Date(newTimestamp);

  return newDate;
};