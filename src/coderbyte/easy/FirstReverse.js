import expect from 'expect';

const FirstReverse = string => string.split('').reverse().join('');

// Tests
describe('FirstReverse', () => {
  const testCases = [
    { val: 'Erik', res: 'kirE' },
    { val: '12345', res: '54321' },
    { val: 'so cool', res: 'looc os' },
  ];

  testCases.forEach((testCase) => {
    it('should return the reverse of the input string', () => {
      expect(FirstReverse(testCase.val)).toBe(testCase.res);
    });
  });
});
