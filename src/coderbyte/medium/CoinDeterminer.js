import expect from 'expect';

/**
 Using the JavaScript language, have the function CoinDeterminer(num) take the input,
 which will be an integer ranging from 1 to 250, and return an integer output that will
 specify the least number of coins, that when added, equal the input integer. Coins are
 based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and
 11. So for example: if num is 16, then the output should be 2 because you can achieve
 the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because
 you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.

 Sample Test Cases
 Input:6
 Output:2

 Input:16
 Output:2
 */

const CoinDeterminer = (amount) => {
  const coins = [1, 5, 7, 9, 11].reverse();
  let bestCombo;

  const makeChange = (target, sum = 0, combo = []) => {
    if (sum === target) {
      bestCombo = combo;
    } else {
      coins.forEach((coin) => {
        const newSum = sum + coin;
        const newCombo = [...combo, coin];

        if (newSum <= target && (!bestCombo || newCombo.length < bestCombo.length)) {
          makeChange(target, newSum, newCombo);
        }
      });
    }
  };

  makeChange(amount);
  return bestCombo.length;
};

// tests
describe('CoinDeterminer', () => {
  const testCases = [
    { val: 6, res: 2 },
    { val: 16, res: 2 },
    { val: 25, res: 3 },
  ];
  testCases.forEach((testCase) => {
    it('should determine whether brackets are matched', () => {
      expect(CoinDeterminer(testCase.val)).toBe(testCase.res);
    });
  });
});
