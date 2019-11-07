const { repeatedFirstWord, wordCount, mostFrequentWords } = require('../repeated-word');

describe('repeated word functions', () => {

  it('repeated first word returns the first repeated word', () => {
    const text = 'It was the best of times, it was the worst of times';
    expect(repeatedFirstWord(text)).toBe('it');
  });
  it('repeated first word returns there is no word repeated if no repeated word', () => {
    const text = 'It was the best of times,';
    expect(repeatedFirstWord(text)).toBe('There is no word repeated');
  });

  it('wordCount returns the word count of all words', ()=>{
    const text = 'It was the best of times, it was the worst of times';
    expect(wordCount(text)).toEqual({ 'best': 1, 'it': 2, 'of': 2, 'the': 2, 'times': 2, 'was': 2, 'worst': 1 });
  });

  it('mostFrequentWords returns the word most frequently used in text', () => {
    const text = 'It was the best of times, it was the worst of times. Times';
    expect(mostFrequentWords(text)).toEqual(['times']);
  });

  it('mostFrequentWords returns the words most frequently used in text', () => {
    const text = 'It was the best of times, it was the worst of times.';
    expect(mostFrequentWords(text)).toEqual(['it', 'was', 'the', 'of', 'times']);
  });

});