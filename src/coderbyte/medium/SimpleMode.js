import expect from 'expect';

/**
 Using the JavaScript language, have the function SimpleMode(arr) take the array of
 numbers stored in arr and return the number that appears most frequently (the mode).
 For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is
 more than one mode return the one that appeared in the array first
 (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no
 mode return -1. The array will not be empty.

 Sample Test Cases
 Input:5,5,2,2,1
 Output:5

 Input:3,4,1,6,10
 Output:-1
 */

const SimpleMode = (arr) => {
  const numFreq = {};
  arr.forEach((num) => {
    if (numFreq[num]) {
      numFreq[num] += 1;
    } else {
      numFreq[num] = 1;
    }
  });

  const modeCount = Math.max(...Object.values(numFreq));
  if (modeCount === 1) {
    return -1;
  }
  const potentialModes = Object.keys(numFreq).filter(num => numFreq[num] === modeCount);
  let result;

  arr.forEach((num) => {
    if (!result && potentialModes.includes(num.toString())) {
      result = num;
    }
  });
  return result;
};

// tests
describe('SimpleMode', () => {
  const testCases = [
    { val: [5, 5, 2, 2, 1], res: 5 },
    { val: [3, 4, 1, 6, 10], res: -1 },
    { val: [2, 6, 2, 6, 1, 1, 6, 1], res: 6 },
  ];
  testCases.forEach((testCase) => {
    it('should return the word with the greatest number of letters', () => {
      expect(SimpleMode(testCase.val)).toBe(testCase.res);
    });
  });
});
