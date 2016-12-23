import expect from 'expect';

const BalancedBrackets = (str) => {
  const brackets = Array.from(str);
  const mirrors = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  while (brackets.length > 0) {
    const temp = brackets.pop();
    const mirror = mirrors[temp];

    if (!brackets.includes(mirror)) {
      return false;
    }

    const mirrorIndex = brackets.lastIndexOf(mirror);
    brackets.splice(mirrorIndex, 1);
  }
  return true;
};

describe('BalancedBrackets', () => {
  const tests = [
    { input: '{([])}', output: true },
    { input: '{{([][])}()}', output: true },
    { input: '([{()]', output: false },
  ];

  it('should return true if brackets are balanced', () => {
    tests.forEach((test) => {
      const { input, output } = test;
      expect(BalancedBrackets(input)).toEqual(output);
    });
  });
});
