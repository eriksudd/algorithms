import expect from 'expect';

/**
 Using the JavaScript language, have the function PrimeChecker(num) take num and return
 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For
 example: if num is 910, the output should be 1 because 910 can be arranged into 109
 or 019, both of which are primes.

 Sample Test Cases
 Input:98
 Output:1

 Input:598
 Output:1
 */

const isPrime = (num) => {
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const gen = (arr, acc = [], result = []) => {
  if (arr.length === 0) {
    return [...result, Number(acc.join(''))];
  }

  arr.forEach((el, idx) => {
    const newArr = [
      ...arr.slice(0, idx),
      ...arr.slice(idx + 1)];
    result = [...gen(newArr, [...acc, el], result)];
  });
  return result;
};

const PrimeChecker = (num) => {
  const numArr = num.toString().split('');
  const perms = gen(numArr).map(number => isPrime(number));
  return perms.includes(true) ? 1 : 0;
};

// tests
describe('PrimeChecker', () => {
  const testCases = [
    { val: 98, res: 1 },
    { val: 598, res: 1 },
    { val: 4, res: 0 },
  ];
  testCases.forEach((testCase) => {
    it('should return 1 if a permutation of the number is prime', () => {
      expect(PrimeChecker(testCase.val)).toBe(testCase.res);
    });
  });
});
