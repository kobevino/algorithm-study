const solution = require('./kobe.js');

describe('find group anagrams', () => {
  it('should be [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
    expect(solution(["eat","tea","tan","ate","nat","bat"])).toEqual([ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]);
  });
  
  it('should be [[""]]', () => {
    expect(solution([''])).toEqual([['']])
  });
  
  it('should be [["a"]]', () => {
    expect(solution(['a'])).toEqual([['a']])
  });
});