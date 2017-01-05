import expect from 'expect';

/**
 Using the JavaScript language, have the function FibonacciChecker(num) return
 the string yes if the number given is part of the Fibonacci sequence. This
 sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the
 previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3,
 5 etc. If num is not in the Fibonacci sequence, return the string no.

 Sample Test Cases
 Input:34
 Output:"yes"

 Input:54
 Output:"no"
 */

const FibbonacciChecker = (num) => {
  let first = 0;
  let second = 1;

  while (second <= num) {
    const temp = first + second;
    first = second;
    second = temp;

    if (temp === num) {
      return 'yes';
    }
  }

  return 'no';
};

// tests
describe('FibbonacciChecker', () => {
  const testCases = [
    { val: 34, res: 'yes' },
    { val: 54, res: 'no' },
    { val: 5, res: 'yes' },
  ];
  testCases.forEach((testCase) => {
    it('should determine if values are part of a Fibonacci sequence', () => {
      expect(FibbonacciChecker(testCase.val)).toBe(testCase.res);
    });
  });
});
