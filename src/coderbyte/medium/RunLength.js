import expect from 'expect';

/**
 Using the JavaScript language, have the function RunLength(str) take the str parameter being
 passed and return a compressed version of the string using the Run-length encoding algorithm.
 This algorithm works by taking the occurrence of each repeating character and outputting that
 number along with a single character of the repeating sequence. For example: "wwwggopp" would
 return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

 Sample Test Cases
 Input:"aabbcde"
 Output:"2a2b1c1d1e"

 Input:"wwwbbbw"
 Output:"3w3b1w"
 */

const RunLength = (str) => {
  // write function here
  let i = 0;
  let result = '';
  let count = 1;

  for (i; i < str.length; i += 1) {
    const curr = str[i];
    const next = str[i + 1];

    if (curr !== next) {
      result += count.toString() + str[i];
      count = 1;
    } else {
      count += 1;
    }
  }

  return result;
};


// Tests
describe('RunLength', () => {
  const testCases = [
    { val: 'aabbcde', res: '2a2b1c1d1e' },
    { val: 'wwwbbbw', res: '3w3b1w' },
    { val: 'aaaaaaa', res: '7a' },
  ];
  testCases.forEach((testCase) => {
    it('should return encoded string', () => {
      expect(RunLength(testCase.val)).toBe(testCase.res);
    });
  });
});
