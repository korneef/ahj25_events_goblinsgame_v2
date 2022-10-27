import randomNumber from '../random-number';

test('randomNumberFunction', () => {
  const received = randomNumber(1, 3);
  const expected = [1, 2, 3].find((item) => {
    if (item === received) {
      return item;
    }
    return null;
  });
  expect(received).toEqual(expected);
});
