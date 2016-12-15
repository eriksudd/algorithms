import expect from 'expect';

/**
 Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed
 and return the string true if the parameter is a prime number, otherwise return the string false.
 The range will be between 1 and 2^16.

 Sample Test Cases
 Input:19
 Output:true

 Input:110
 Output:fals
 */

const PrimeTime = (num) => {
  // write function here
  let i = 2;

  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};


// Tests
describe('PrimeTime', () => {
  const testCases = [
    { val: 19, res: true },
    { val: 110, res: false },
    { val: 11, res: true },
  ];
  testCases.forEach((testCase) => {
    it('should return true for a prime number', () => {
      expect(PrimeTime(testCase.val)).toBe(testCase.res);
    });
  });
});
