module.exports = (date, diff) => {


  const diffNum = Number(diff.match(/[0-9]/gi));
  let diffLetter = diff.match(/([a-z, A-Z]|[^0-9, |])/gi)[0];

  const getSeconds = date.getSeconds();
  const getMinutes = date.getMinutes();

  const getHours = date.getHours();

  const getMonth = date.getMonth();

  const getYear = 1900 + date.getYear();

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