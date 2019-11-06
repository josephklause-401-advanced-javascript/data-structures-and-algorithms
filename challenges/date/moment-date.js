const moment = require('moment');

module.exports = (date, diff) => {
  
  const diffNum = Number(diff.match(/[0-9]/gi));
  let diffLetter = diff.match(/([a-z, A-Z]|[^0-9, |])/gi)[0];

  const conversion = {
    s: 'seconds',
    m: 'minutes',
    h: 'hours',
    d: 'days',
    w: 'weeks',
    M: 'months',
    y: 'years'
  }; 

  if(typeof diffNum !== 'number') return null;
  if(conversion[diffLetter] === undefined) return null;

  const momentDate = moment(date).add(diffNum, conversion[diffLetter]);

  return momentDate._d;
};