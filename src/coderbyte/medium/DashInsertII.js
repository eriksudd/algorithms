import expect from 'expect';

/**
 Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-')
 between each two odd numbers and insert asterisks ('*') between each two even numbers in
 str. For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as
 an odd or even number.

 Sample Test Cases
 Input:99946
 Output:9-9-94*6

 Input:56647304
 Output:56*6*47-304
 */
const evenOrOdd = (curr, next) => {
  if (curr === 0 || next === 0 || next === undefined) { return 'neither'; }

  if (curr % 2 === 0 && next % 2 === 0) {
    return 'even';
  } else if (curr % 2 !== 0 && next % 2 !== 0) {
    return 'odd';
  }

  return 'neither';
};


const DashInsertII = (num) => {
  let result = '';
  const arr = num.toString().split('').map(Number);

  for (let i = 0; i < arr.length; i += 1) {
    const curr = arr[i];
    const next = arr[i + 1];

    if (evenOrOdd(curr, next) === 'even') {
      result += `${curr}*`;
    } else if (evenOrOdd(curr, next) === 'odd') {
      result += `${curr}-`;
    } else {
      result += curr;
    }
  }

  return result;
};

// tests
describe('DashInsertII', () => {
  const testCases = [
    { val: 99946, res: '9-9-94*6' },
    { val: 56647304, res: '56*6*47-304' },
    { val: 99, res: '9-9' },
    { val: 80, res: '80' },
    { val: 88, res: '8*8' },
  ];
  testCases.forEach((testCase) => {
    it('should place - between odd numbers and * between even numbers', () => {
      expect(DashInsertII(testCase.val)).toBe(testCase.res);
    });
  });
});
