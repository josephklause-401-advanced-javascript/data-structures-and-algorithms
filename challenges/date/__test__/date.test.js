const add = require('../date-setting');


describe('add', ()=> {

  it('adds the difference to the given date', () => {
    const date = new Date(1571706698637);
  
    const twoSeconds = '2s';
    const twoMinutes = '2m';
    const twoHours = '2h';
    const twoDays = '2d';
    const twoWeeks = '2w';
    const twoMonths = '2M';
    const twoYears = '2y';

    expect(add(date, twoSeconds)).toEqual(new Date(1571706700637));
    expect(add(date, twoMinutes)).toEqual(new Date(1571706818637));
    expect(add(date, twoHours)).toEqual(new Date(1571713898637));
    expect(add(date, twoDays)).toEqual(new Date(1571879498637));
    expect(add(date, twoWeeks)).toEqual(new Date(1572916298637));
    expect(add(date, twoMonths)).toEqual(new Date(1576980698637));
    expect(add(date, twoYears)).toEqual(new Date(1634865098637));
  });


  it('returns null with bad input', () => {
    const date = new Date(1571706698637);
    const badInputOne = '{s';
    const badInputTwo = '3g';

    expect(add(date, badInputOne)).toBe(null);
    expect(add(date, badInputTwo)).toBe(null);
  });

});