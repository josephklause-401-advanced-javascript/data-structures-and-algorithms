const eeneyMeeneyMineyMo = require('../eeney-meeney');

describe('eeney-meeney', () => {
  it('correctly returns the last remaining person', () => {
    const arr = ['joe', 'john', 'josh', 'jill', 'jen'];
    const k = 4;
    const result = eeneyMeeneyMineyMo(arr, k);

    expect(result).toBe('joe');
  });


});