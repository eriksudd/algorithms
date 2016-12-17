import expect from 'expect';

/**
 Using the JavaScript language, have the function LetterCount(str) take the str
 parameter being passed and return the first word with the greatest number of
 repeatedletters. For example: "Today, is the greatest day ever!" should return
 greatest because it has 2 e's (and 2 t's) and it comes before ever which also has
 2 e's. If there are no words with repeating letters return -1. Words will be
 separated by spaces.

 Sample Test Cases
 Input:"Hello apple pie"
 Output:Hello

 Input:"No words"
 Output:-1
 */

const LetterCount = (str) => {
  const words = str.replace(/[^a-z|\s]/gi, '').split(' ');

  const numRepeatLetters = (word) => {
    const chars = {};
    word.split('').forEach((char) => {
      if (chars[char] !== undefined) {
        chars[char] += 1;
      } else {
        chars[char] = 1;
      }
    });
    const maxRepeat = Math.max(...Object.values(chars));
    return maxRepeat;
  };

  const repeatLetters = words.map(word => numRepeatLetters(word));
  const maxRepeatLetters = Math.max(...repeatLetters);
  if (maxRepeatLetters === 1) {
    return -1;
  }
  const indexMaxRepeat = repeatLetters.indexOf(Math.max(...repeatLetters));
  return words[indexMaxRepeat];
};

// tests
describe('LetterCount', () => {
  const testCases = [
    { val: 'Hello apple pie', res: 'Hello' },
    { val: 'Today, is the greatest day ever!', res: 'greatest' },
    { val: 'No words', res: -1 },
  ];
  testCases.forEach((testCase) => {
    it('should return the word with the greatest number of letters', () => {
      expect(LetterCount(testCase.val)).toBe(testCase.res);
    });
  });
});
