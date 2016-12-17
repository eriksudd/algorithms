import expect from 'expect';

/**
 Using the JavaScript language, have the function CaesarCipher(str,num) take the str
 parameter and perform a Caesar Cipher shift on it using the num parameter as the
 shifting number. A Caesar Cipher works by shifting each letter in the string N places
 down in the alphabet (in this case N will be num). Punctuation, spaces, and
 capitalization should remain intact. For example if the string is "Caesar Cipher" and
 num is 2 the output should be "Ecguct Ekrjgt".

 Sample Test Cases
 Input:"Hello" & num = 4
 Output:"Lipps"

 Input:"abc" & num = 0
 Output:"abc"
 */

const CaesarCipher = (str, num) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (num === 0) {
    return str;
  }

  const cipher = str.split('').map((letter) => {
    const uppercase = letter.toUpperCase() === letter;
    const char = letter.toLowerCase();

    if (alphabet.includes(char)) {
      const shift = (alphabet.indexOf(char) + num) % 26;
      return uppercase ? alphabet[shift].toUpperCase() : alphabet[shift];
    }
    return letter;
  }).join('');

  return cipher;
};

// tests
describe('CaesarCipher', () => {
  const testCases = [
    { val: ['Caesar Cipher', 2], res: 'Ecguct Ekrjgt' },
    { val: ['Hello', 4], res: 'Lipps' },
    { val: ['world!', 1], res: 'xpsme!' },
  ];
  testCases.forEach((testCase) => {
    it('should shift chars n places', () => {
      expect(CaesarCipher(testCase.val[0], testCase.val[1])).toBe(testCase.res);
    });
  });
});
