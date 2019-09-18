const binarySearch = require('../array-binary-search');

describe('takes an array and a key', () => {

  it('binary search for key, output key index', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const key = 3;
    expect(binarySearch(input, key)).toBe(2);
  });

  it('binary search it, ouput -1 when not found', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const key = 10;
    expect(binarySearch(input, key)).toBe(-1);
  });

});