const solution = require('./kobe.js');

describe('Find the k most frequent elements', () => {
  it('should be [1, 2]', () => {
    expect(solution([1,1,1,2,2,3], 2)).toEqual([1, 2]);
  });
  
  it('should be [1]', () => {
    expect(solution([1])).toEqual([1]);
  });
})