import expect from 'expect';

/**
 Using the JavaScript language, have the function ArrayAddition(arr) take the array
 of numbers stored in arr and return the string true if any combination of numbers
 in the array can be added up to equal the largest number in the array, otherwise
 return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output
 should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will
 not contain all the same elements, and may contain negative numbers.

 Sample Test Cases
 Input:5,7,16,1,2
 Output:"false"

 Input:3,5,-1,8,12
 Output:"true"
 */

const ArrayAddition = (arr) => {
  // write function here
  const largest = Math.max(...arr);
  const largestIndex = arr.indexOf(largest);
  const others = [...arr.slice(0, largestIndex), ...arr.slice(largestIndex + 1)];
  let result = false;

  const checkSum = (set, numbers) => {
    if (numbers.length === 0) {
      return;
    }

    numbers.forEach((num, idx) => {
      const newSet = [...set, num];
      const sum = newSet.reduce((p, c) => p + c);
      const newNums = [...numbers.slice(0, idx), ...numbers.slice(idx + 1)];
      if (sum === largest) {
        result = true;
        return;
      }
      checkSum(newSet, newNums);
    });
  };

  checkSum([], others);

  return result;
};

// tests
describe('ArrayAddition', () => {
  const testCases = [
    { val: [4, 6, 23, 10, 1, 3], res: true },
    { val: [5, 7, 16, 1, 2], res: false },
    { val: [1, 2, 3, 4, 5], res: true },
  ];
  testCases.forEach((testCase) => {
    it('should determime whether the sequence is Arithmetic or Geometric', () => {
      expect(ArrayAddition(testCase.val)).toBe(testCase.res);
    });
  });
});
