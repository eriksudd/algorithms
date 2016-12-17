import expect from 'expect';

/**
 Using the JavaScript language, have the function PalindromeTwo(str) take the str
 parameter being passed and return the string true if the parameter is a palindrome,
 (the string is the same forward as it is backward) otherwise return the string false.
 The parameter entered may have punctuation and symbols but they should not affect
 whether the string is in fact a palindrome. For example: "Anne, I vote more cars race
 Rome-to-Vienna" should return true.

 Sample Test Cases
 Input:"Noel - sees Leon"
 Output:"true"

 Input:"A war at Tarawa!"
 Output:"true"
 */

const PalindromeTwo = (str) => {
  // write function here
  const string = str.replace(/[^a-z]/gi, '').toLowerCase();
  return string === string.split('').reverse().join('');
};

// tests
describe('PalindromeTwo', () => {
  const testCases = [
    { val: 'Noel - sees Leon', res: true },
    { val: 'A war at Tarawa!', res: true },
    { val: 'race cars!', res: false },
  ];
  testCases.forEach((testCase) => {
    it('should return true for a palindrome', () => {
      expect(PalindromeTwo(testCase.val)).toBe(testCase.res);
    });
  });
});
