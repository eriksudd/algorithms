import expect from 'expect';

/**
 Using the JavaScript language, have the function PermutationStep(num) take the num
 parameter being passed and return the next number greater than num using the same
 digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a
 number has no greater permutations, return -1 (ie. 999).

 Sample Test Cases
 Input:11121
 Output:11211

 Input:41352
 Output:41523
 */

const gen = (arr, acc = [], result = []) => {
  if (arr.length === 0) {
    return [Number(acc.join(''))];
  }

  arr.forEach((el, i) => {
    const newArr = [
      ...arr.slice(0, i),
      ...arr.slice(i + 1)];
    result.push(...gen(newArr, [...acc, el]));
  });

  return result;
};


const PermutationStep = (num) => {
  const numArr = num.toString().split('');
  const perms = gen(numArr);

  let answer;
  perms.sort((a, b) => a - b).forEach((el) => {
    if (!answer && el > num) {
      answer = el;
    }
  });
  return answer || -1;
};

// tests
describe('PermutationStep', () => {
  const testCases = [
    { val: 11121, res: 11211 },
    { val: 41352, res: 41523 },
    { val: 11, res: -1 },
  ];
  testCases.forEach((testCase) => {
    it('should return the next highest permutation', () => {
      expect(PermutationStep(testCase.val)).toBe(testCase.res);
    });
  });
});
