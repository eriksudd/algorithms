import expect from 'expect';

/**
 Using the JavaScript language, have the function Division(num1,num2) take both
 parameters being passed and return the Greatest Common Factor. That is, return
 the greatest number that evenly goes into both numbers with no remainder. For
 example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4.
 The range for both parameters will be from 1 to 10^3.

 Sample Test Cases
 Input:7 & num2 = 3
 Output:1

 Input:36 & num2 = 54
 Output:18
 */

const Division = (num1, num2) => {
  // write function here
  let count = Math.min(num1, num2);

  while (count > 0) {
    if (num1 % count === 0 && num2 % count === 0) {
      break;
    }
    count -= 1;
  }

  return count;
};

// tests
describe('Division', () => {
  const testCases = [
    { val: [7, 3], res: 1 },
    { val: [36, 54], res: 18 },
    { val: [5, 10], res: 5 },
  ];
  testCases.forEach((testCase) => {
    it('should return greatest common factor', () => {
      expect(Division(testCase.val[0], testCase.val[1])).toBe(testCase.res);
    });
  });
});
