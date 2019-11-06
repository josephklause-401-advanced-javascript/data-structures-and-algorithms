const insertShiftArray = require('../array-shift');

describe('shifts an array', () => {
  
  it('with even length', () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
  });

  it('with uneven length', () => {
    expect(insertShiftArray([1, 2, 3], 4)).toEqual([1, 2, 4, 3]);
  });
});