import GameClass from '../gameClass'
import gameaa from '../game'
import enemy from '../../img/goblin.png'

test('randomNumberFunction', () => {
  const game = new GameClass;
  game.randomNumber(1, 3);
  const received = game.random;
  const expected = [1, 2, 3].find((item) => {
    if (item === received) {
      return item;
    }
    return null;
  });
  expect(received).toBe(expected);
});
