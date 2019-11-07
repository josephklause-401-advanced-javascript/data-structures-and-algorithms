const { data, result1 } = require('./data');
const transaction = require('../transaction');

describe('transaction', ()=> {

  it('aggregates transactions (revenue) and date outputs by date', () => {

    expect(transaction(data)).toEqual(result1);

  });

});