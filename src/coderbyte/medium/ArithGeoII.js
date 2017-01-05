import expect from 'expect';

/**
 Using the JavaScript language, have the function ArithGeoII(arr) take the array of
 numbers stored in arr and return the string "Arithmetic" if the sequence follows an
 arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the
 sequence doesn't follow either pattern return -1. An arithmetic sequence is one where
 the difference between each of the numbers is consistent, where as in a geometric
 sequence, each term after the first is multiplied by some constant or common ratio.
 Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative
 numbers may be entered as parameters, 0 will not be entered, and no array will contain
 all the same elements.

 Sample Test Cases
 Input:5,10,15
 Output:"Arithmetic"

 Input:2,4,16,24
 Output:-1
 */

const ArithGeoII = (arr) => {
  // write function here
  let arith = arr[1] - arr[0];
  let geo = arr[1] / arr[0];

  arr.forEach((curr, i) => {
    const next = arr[i + 1];
    if (next && next - curr !== arith) {
      arith = false;
    }

    if (next && next / curr !== geo) {
      geo = false;
    }
  });

  if (arith !== false) {
    return 'Arithmetic';
  } else if (geo !== false) {
    return 'Geometric';
  }

  return -1;
};

// tests
describe('ArithGeoII', () => {
  const testCases = [
    { val: [5, 10, 15], res: 'Arithmetic' },
    { val: [2, 4, 16, 24], res: -1 },
    { val: [2, 6, 18, 54], res: 'Geometric' },
  ];
  testCases.forEach((testCase) => {
    it('should determime whether the sequence is Arithmetic or Geometric', () => {
      expect(ArithGeoII(testCase.val)).toBe(testCase.res);
    });
  });
});
