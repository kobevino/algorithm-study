const solution = require('./kobe.js');

describe('check if it contains duplicate number', () => {
  it('should be truthy', () => {
    expect(solution([1,2,3,1])).toBeTruthy();
  });
  
  it('should be falsy', () => {
    expect(solution([1,2,3,4])).toBeFalsy();
  });
  
  it('should be truthy', () => {
    expect(solution([1,1,1,3,3,4,3,2,4,2])).toBeTruthy();
  });
})