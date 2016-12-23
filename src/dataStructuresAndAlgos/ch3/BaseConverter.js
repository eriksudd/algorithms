import expect from 'expect';

const BaseConverter = (decNum, base) => {
  const digits = '0123456789ABCDEF';
  const result = [];
  let num = decNum;
  let rem;

  while (num > 0) {
    rem = Math.floor(num % base);
    result.unshift(rem);
    num = Math.floor(num / base);
  }

  return result.map(n => digits[n]).join('');
};


describe('BaseConverter', () => {
  const tests = [
    { input: [1738, 8], output: '3312' },
    { input: [1738, 16], output: '6CA' },
    { input: [1738, 2], output: '11011001010' },
  ];

  it('should convert decNum to specified base', () => {
    tests.forEach((test) => {
      const { input, output } = test;
      expect(BaseConverter(...input)).toEqual(output);
    });
  });
});
