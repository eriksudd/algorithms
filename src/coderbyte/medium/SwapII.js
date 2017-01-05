import expect from 'expect';

/**
 Using the JavaScript language, have the function SwapII(str) take the str parameter and
 swap the case of each character. Then, if a letter is between two numbers (without
 separation), switch the places of the two numbers. For example: if str is "6Hello4
 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3.

 Sample Test Cases
 Input:"Hello -5LOL6"
 Output:"hELLO -6lol5"

 Input:"2S 6 du5d4e"
 Output:"2s 6 DU4D5E"
 */

const swapCase = (str) => {
  const swapped = str.split('').map((char) => {
    if (char.toLowerCase() === char) {
      return char.toUpperCase();
    }
    return char.toLowerCase();
  }).join('');
  return swapped;
};

const swapNumbers = (str) => {
  let tempNum = null;
  let tempIndex = null;
  const chars = str.split('');

  chars.forEach((char, currIdx) => {
    if (tempNum && char.match(/\d/)) {
      chars[tempIndex] = char;
      chars[currIdx] = tempNum;
      tempNum = null;
      tempIndex = null;
    } else if (tempNum === null && char.match(/\d/)) {
      tempNum = char;
      tempIndex = currIdx;
    } else if (char === ' ') {
      tempNum = null;
      tempIndex = null;
    }
  });

  return chars.join('');
};

const SwapII = str => swapNumbers(swapCase(str));

// tests
describe('SwapII', () => {
  const testCases = [
    { val: '6Hello4 -8World, 7 yes3', res: '4hELLO6 -8wORLD, 7 YES3' },
    { val: 'Hello -5LOL6', res: 'hELLO -6lol5' },
    { val: '2S 6 du5d4e', res: '2s 6 DU4D5E' },
  ];
  testCases.forEach((testCase) => {
    it('should swap case and switch numbers', () => {
      expect(SwapII(testCase.val)).toBe(testCase.res);
    });
  });
});
