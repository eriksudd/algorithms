import expect from 'expect';

/**
 Using the JavaScript language, have the function BracketMatcher(str) take the str
 parameter being passed and return 1 if the brackets are correctly matched and each
 one is accounted for. Otherwise return 0. For example: if str is "(hello (world))",
 then the output should be 1, but if str is "((hello (world))" the the output should
 be 0 because the brackets do not correctly match up. Only "(" and ")" will be used
 as brackets. If str contains no brackets return 1.

 Sample Test Cases
 Input:"(coder)(byte))"
 Output:0

 Input:"(c(oder)) b(yte)"
 Output:1
 */


const BracketMatcher = (str) => {
  const brackets = Array.from(str.replace(/[^(|)]/g, ''));
  const key = { '(': ')', ')': '(' };

  while (brackets.length > 0) {
    const temp = brackets.pop();
    const mirror = key[temp];

    if (!brackets.includes(mirror)) {
      return 0;
    }

    const index = brackets.indexOf(mirror);
    brackets.splice(index, 1);
  }

  return 1;
};

// tests
describe('BracketMatcher', () => {
  const testCases = [
    { val: '(hello (world))', res: 1 },
    { val: '(coder)(byte))', res: 0 },
    { val: '(c(oder)) b(yte)', res: 1 },
  ];
  testCases.forEach((testCase) => {
    it('should determine whether brackets are matched', () => {
      expect(BracketMatcher(testCase.val)).toBe(testCase.res);
    });
  });
});
