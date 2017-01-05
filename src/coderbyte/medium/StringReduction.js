import expect from 'expect';

/**
 Using the JavaScript language, have the function StringReduction(str) take the str
 parameter being passed and return the smallest number you can get through the following
 reduction method. The method is: Only the letters a, b, and c will be given in str and
 you must take two different adjacent characters and replace it with the third. For
 example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This
 method is done repeatedly until the string cannot be further reduced, and the length
 of the resulting string is to be outputted. For example: if str is "cab", "ca" can be
 reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done
 so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab",
 then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output
 should be 1.

 Sample Test Cases
 Input:"abcabc"
 Output:2

 Input:"cccc"
 Output:4
 */

const reduce = (str) => {
  const result = str.split('').reduce((p, c) => {
    const last = p.slice(p.length - 1);
    const combo = last + c;
    let reduction;

    if (last === c) {
      return p + c;
    }

    if (combo === 'ab' || combo === 'ba') {
      reduction = 'c';
    } else if (combo === 'ac' || combo === 'ca') {
      reduction = 'b';
    } else {
      reduction = 'a';
    }
    return p.slice(0, p.length - 1) + reduction;
  });
  return result;
};

const StringReduction = (str) => {
  let reducing = true;
  let result = str;

  while (reducing) {
    const newResult = reduce(result);

    if (newResult === result) {
      reducing = false;
    }

    result = newResult;
  }

  return result.length;
};

// tests
describe('StringReduction', () => {
  const testCases = [
    { val: 'abcabc', res: 2 },
    { val: 'cccc', res: 4 },
    { val: 'bcab', res: 1 },
  ];
  testCases.forEach((testCase) => {
    it('should determine whether brackets are matched', () => {
      expect(StringReduction(testCase.val)).toBe(testCase.res);
    });
  });
});
