const reverseArray = require('../array-reverse');

describe('takes an array', () => {
  const input = [1, 2, 3, 4, 5];

  it('reverses it', () => {
    expect(reverseArray(input)).toEqual([5, 4, 3, 2, 1]);
  });
});