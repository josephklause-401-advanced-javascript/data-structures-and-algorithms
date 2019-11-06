const multiBracketValidation = require('../new-multi-bracket-validation');

describe('multi bracket validation', ()=> {

  it('will return true for equal balanced single bracket set', ()=> {
    const inputOne = 'today [ is ]';
    const inputTwo = 'today { is }';
    const inputThree = 'today ( is )';

    expect(multiBracketValidation(inputOne)).toBe(true);
    expect(multiBracketValidation(inputTwo)).toBe(true);
    expect(multiBracketValidation(inputThree)).toBe(true);
    
  });
  
  it('will return true for equal balanced multi bracket set', ()=> {
    const inputOne = 'today [ is ] with []';
    const inputTwo = 'today { is } with {}';
    const inputThree = 'today ( is ) with ()';
    const inputFour = 'today [ is ] and ( has { with } and )';

    expect(multiBracketValidation(inputOne)).toBe(true);
    expect(multiBracketValidation(inputTwo)).toBe(true);
    expect(multiBracketValidation(inputThree)).toBe(true);
    expect(multiBracketValidation(inputFour)).toBe(true);
  });
  
  
  it('will return false for a close bracket before an open bracket ', ()=> {
    const inputOne = 'this ) will return false ( even with (this)';
    const inputTwo = 'this } will return false { even with {this}';
    const inputThree = 'this ] will return false [ even with [this]';
    const inputFour = 'this( will ) also ) return false ()';

    expect(multiBracketValidation(inputOne)).toBe(false);
    expect(multiBracketValidation(inputTwo)).toBe(false);
    expect(multiBracketValidation(inputThree)).toBe(false);
    expect(multiBracketValidation(inputFour)).toBe(false);
  });
  
  it('will return false for unequal balanced brackets', () => {
    const inputOne = '(this will return ( false)';
    const inputTwo = '{this will return { false}';
    const inputThree = '[this will return [ false]';
    const inputFour = '[this will return] false]';
    const inputFive = '{this will return} false}';
    const inputSix = '(this will return)  false)';
    const inputSeven = '(this will [ also ] return false }';
    const inputEight = '[this{ will () ] return} false ()';

    expect(multiBracketValidation(inputOne)).toBe(false);
    expect(multiBracketValidation(inputTwo)).toBe(false);
    expect(multiBracketValidation(inputThree)).toBe(false);
    expect(multiBracketValidation(inputFour)).toBe(false);
    expect(multiBracketValidation(inputFive)).toBe(false);
    expect(multiBracketValidation(inputSix)).toBe(false);
    expect(multiBracketValidation(inputSeven)).toBe(false);
    expect(multiBracketValidation(inputEight)).toBe(false);
  });

});