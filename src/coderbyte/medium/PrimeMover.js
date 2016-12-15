import expect from 'expect';

/**
 Using the JavaScript language, have the function PrimeMover(num) return the numth prime number.
 The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the
 16th prime number.

 Sample Test Cases
 Input:9
 Output:23

 Input:100
 Output:541
 */

const isPrime = (num) => {
  let i = 2;

  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

const PrimeMover = (num) => {
  // write function here
  let count = 0;
  let i = 2;

  while (count < num) {
    if (isPrime(i)) {
      count += 1;
    }
    i += 1;
  }
  return i - 1;
};


// tests
describe('PrimeMover', () => {
  const testCases = [
    { val: 9, res: 23 },
    { val: 100, res: 541 },
    { val: 1, res: 2 },
  ];
  testCases.forEach((testCase) => {
    it('should return true for a prime number', () => {
      expect(PrimeMover(testCase.val)).toBe(testCase.res);
    });
  });
});
