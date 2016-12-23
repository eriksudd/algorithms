import expect from 'expect';

/**
 Using the JavaScript language, have the function CountingMinutes(str) take the str
 parameter being passed which will be two times (each properly formatted with a colon
 and am or pm) separated by a hyphen and return the total number of minutes between
 the two times. The time will be in a 12 hour clock format. For example: if str is
 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output
 should be 1320.

 Sample Test Cases
 Input:"12:30pm-12:00am"
 Output:690

 Input:"1:23am-1:08am"
 Output:1425
 */

const CountingMinutes = (str) => {
  const timeToMinutes = (time) => {
    const hours = Number(time.split(':')[0]);
    const minutes = Number(time.split(':')[1].slice(0, 2));
    const amPm = time.split(':')[1].slice(2);

    if (amPm === 'am' && hours === 12) {
      return minutes;
    } else if (amPm === 'pm' && hours !== 12) {
      return ((hours + 12) * 60) + minutes;
    }

    return (hours * 60) + minutes;
  };
  const from = str.split('-')[0];
  const to = str.split('-')[1];
  let minutes = timeToMinutes(to) - timeToMinutes(from);
  if (minutes < 0) {
    minutes += 1440;
  }
  return minutes;
};

// tests
describe('CountingMinutes', () => {
  const testCases = [
    { val: '12:30pm-12:00am', res: 690 },
    { val: '1:23am-1:08am', res: 1425 },
    { val: '5:00pm-5:11pm', res: 11 },
  ];
  testCases.forEach((testCase) => {
    it('should convert time to minutes', () => {
      expect(CountingMinutes(testCase.val)).toBe(testCase.res);
    });
  });
});
