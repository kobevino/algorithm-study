const solution = require('./kobe.js');

describe('find the indices of two numbers that sum up to the target', () => {
  it('should be [0, 1]', () => {
    expect(solution([2,7,11,15], 9)).toEqual([0, 1]);
  });
  
  it('should be [1, 2]', () => {
    expect(solution([3,2,4], 6)).toEqual([1, 2]);
  });
  
  it('should be [0, 1]', () => {
    expect(solution([3,3], 6)).toEqual([0, 1]);
  });
})