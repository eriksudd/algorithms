import expect from 'expect';

/**
 Using the JavaScript language, have the function MultipleBrackets(str) take the
 str parameter being passed and return 1 #ofBrackets if the brackets are correctly
 matched and each one is accounted for. Otherwise return 0. For example: if str
 is "(hello [world])(!)", then the output should be 1 3 because all the brackets
 are matched and there are 3 pairs of brackets, but if str is "((hello [world])"
 the the output should be 0 because the brackets do not correctly match up. Only
 "(", ")", "[", and "]" will be used as brackets. If str contains no brackets
 return 1.

 Sample Test Cases
 Input:"(coder)[byte)]"
 Output:0

 Input:"(c([od]er)) b(yt[e])"
 Output:1 5
 */

const MultipleBrackets = (str) => {
  let pairs = 0;
  const open = {
    '(': 0,
    '[': 0,
  };

  const close = {
    ')': '(',
    ']': '[',
  };

  str.split('').forEach((char) => {
    if (open[char] !== undefined) {
      open[char] += 1;
    } else if (close[char]) {
      const mirror = close[char];
      open[mirror] -= 1;
      pairs += 1;
    }
  });

  return Object.values(open).every(el => el === 0) ? `1 ${pairs}` : 0;
};

// tests
describe('MultipleBrackets', () => {
  const testCases = [
    { val: '((hello [world])', res: 0 },
    { val: '(coder)[byte)]', res: 0 },
    { val: '(c([od]er)) b(yt[e])', res: '1 5' },
  ];
  testCases.forEach((testCase) => {
    it('should determine if values are part of a Fibonacci sequence', () => {
      expect(MultipleBrackets(testCase.val)).toBe(testCase.res);
    });
  });
});
