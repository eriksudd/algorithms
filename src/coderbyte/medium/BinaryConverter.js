import expect from 'expect';

/**
 Using the JavaScript language, have the function BinaryConverter(str) return the
 decimal form of the binary value. For example: if 101 is passed return 5, or if
 1000 is passed return 8.

 Sample Test Cases
 Input:"100101"
 Output:"37"

 Input:"011"
 Output:"3"
 */

const BinaryConverter = (str) => {
  const remaining = str.slice(0).split('');
  let result = 0;
  let multiplier = 1;

  while (remaining.length !== 0) {
    const chunk = remaining.pop();
    result += Number(chunk[0]) * multiplier;
    multiplier *= 2;
  }

  return result.toString();
};

// tests
describe('BinaryConverter', () => {
  const testCases = [
    { val: '101', res: '5' },
    { val: '011', res: '3' },
    { val: '1000', res: '8' },
  ];
  testCases.forEach((testCase) => {
    it('should return the decimal form of the binary value', () => {
      expect(BinaryConverter(testCase.val)).toBe(testCase.res);
    });
  });
});
