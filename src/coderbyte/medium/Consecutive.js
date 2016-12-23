import expect from 'expect';

/**
 Using the JavaScript language, have the function Consecutive(arr) take the array of
 integers stored in arr and return the minimum number of integers needed to make the
 contents of arr consecutive from the lowest number to the highest number. For example:
 If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be
 added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8.
 Negative numbers may be entered as parameters and no array will have less than 2
 elements.

 Sample Test Cases
 Input:5,10,15
 Output:8

 Input:-2,10,4
 Output:10
 */

const Consecutive = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const items = arr.length - 1;
  return max - min - items;
};

// tests
describe('Consecutive', () => {
  const testCases = [
    { val: [5, 10, 15], res: 8 },
    { val: [-2, 10, 4], res: 10 },
    { val: [4, 8, 6], res: 2 },
  ];
  testCases.forEach((testCase) => {
    it('should number elements to make arr consecutive', () => {
      expect(Consecutive(testCase.val)).toBe(testCase.res);
    });
  });
});
