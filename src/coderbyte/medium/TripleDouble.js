import expect from 'expect';

/**
 Using the JavaScript language, have the function TripleDouble(num1,num2) take both
 parameters being passed, and return 1 if there is a straight triple of a number at
 any place in num1 and also a straight double of the same number in num2. For example:
 if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the
 first parameter you have the straight triple 999 and you have a straight double, 99,
 of the same number in the second parameter. If this isn't the case, return 0.

 Sample Test Cases
 Input:465555 & num2 = 5579
 Output:1

 Input:67844 & num2 = 66237
 Output:0
 */

const triple = (n) => {
  const nStr = n.toString();
  let result = false;

  nStr.split('').forEach((curr, i) => {
    if (curr === nStr[i + 1] && curr === nStr[i + 2]) {
      result = curr;
    }
  });

  return result;
};

const double = (n, target) => {
  const nStr = n.toString();
  let result = false;

  nStr.split('').forEach((curr, i) => {
    const next = nStr[i + 1];
    if (curr === target && next === target) {
      result = true;
    }
  });

  return result === true ? 1 : 0;
};

const TripleDouble = (n1, n2) => {
  const target = triple(n1);
  return double(n2, target);
};

// tests
describe('TripleDouble', () => {
  const testCases = [
    { val: [451999277, 41177722899], res: 1 },
    { val: [465555, 5579], res: 1 },
    { val: [67844, 66237], res: 0 },
  ];
  testCases.forEach((testCase) => {
    it('should add up all numbers and divide by nubmer of letters', () => {
      expect(TripleDouble(...testCase.val)).toBe(testCase.res);
    });
  });
});
