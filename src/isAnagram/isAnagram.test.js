const solution = require('./kobe.js');

describe('check if two words are anagram', () => {
  it('should be truthy', () => {
    expect(solution('anagram', 'nagaram')).toBeTruthy();
  });
  
  it('should be falsy', () => {
    expect(solution('rat', 'car')).toBeFalsy();
  });
})