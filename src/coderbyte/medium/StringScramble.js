import expect from 'expect';

/**
 Using the JavaScript language, have the function StringScramble(str1,str2) take both
 parameters being passed and return the string true if a portion of str1 characters
 can be rearranged to match str2, otherwise return the string false. For example: if
 str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and
 symbols will not be entered with the parameters.

 Sample Test Cases
 Input:"cdore" & str2= "coder"
 Output:"true"

 Input:"h3llko" & str2 = "hello"
 Output:"false"
 */

const StringScramble = (str1, str2) => {
  // write function here
  let i = 0;
  let store = str1.slice(0);

  for (i; i < str2.length; i += 1) {
    const curr = str2[i];
    const storeIndex = store.indexOf(curr);
    if (storeIndex > -1) {
      store = store.slice(0, storeIndex) + store.slice(storeIndex + 1);
    } else {
      return false;
    }
  }
  return true;
};

// tests
describe('StringScramble', () => {
  const testCases = [
    { val: ['cdore', 'coder'], res: true },
    { val: ['h3llko', 'hello'], res: false },
    { val: ['gaascoccngle', 'google'], res: false },
  ];
  testCases.forEach((testCase) => {
    it('should return true if a portion of str1 can be rearranged to match str2', () => {
      expect(StringScramble(testCase.val[0], testCase.val[1])).toBe(testCase.res);
    });
  });
});
