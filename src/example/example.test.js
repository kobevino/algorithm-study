const solution = require('./kobe.js');

describe('', () => {
  it('should be 3', () => {
    expect(solution(1, 2)).toBe(3)
  });
  
  it('should be 5', () => {
    expect(solution(2, 3)).toBe(5)
  });
  
  it('should be 10', () => {
    expect(solution(5, 5)).toBe(10)
  });
})