import expect from 'expect';

/**
 Using the JavaScript language, have the function ThreeFiveMultiples(num) return
 the sum of all the multiples of 3 and 5 that are below num. For example: if num
 is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding
 them up you get 23, so your program should return 23. The integer being passed
 will be between 1 and 100.

 Sample Test Cases
 Input:6
 Output:8

 Input:1
 Output:0
 */

const ThreeFiveMultiples = (num) => {
  const multiples = [];
  let count = 0;

  for (count; count < num; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) {
      multiples.push(count);
    }
  }

  return multiples.reduce((a, b) => a + b);
};

// tests
describe('ThreeFiveMultiples', () => {
  const testCases = [
    { val: 6, res: 8 },
    { val: 1, res: 0 },
    { val: 10, res: 23 },
  ];
  testCases.forEach((testCase) => {
    it('should determine whether brackets are matched', () => {
      expect(ThreeFiveMultiples(testCase.val)).toBe(testCase.res);
    });
  });
});
