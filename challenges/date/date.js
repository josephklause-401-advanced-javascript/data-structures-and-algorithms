module.exports = (date, diff) => {

  const dateNum = Number(date);

  const diffNum = Number(diff.match(/[0-9]/gi));
  const diffLetter = diff.match(/([a-z, A-Z]|[^0-9, |])/gi)[0];
 
  const conversion = {
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    w: 604800000,
    M: 18144000000, //assuming 30 days per month
    y: 220752000000 //assuming 365 days per year
  };

  if(typeof diffNum !== 'number') return null;
  if(conversion[diffLetter] === undefined) return null;

  return new Date(dateNum + diffNum * conversion[diffLetter]);
};
