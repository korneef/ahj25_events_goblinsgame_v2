import { enemy } from './create-enemy';
import randomNumber from './random-number';

function enemyChange() {
  const arena = Array.from(document.getElementsByClassName('game-cell'));

  let randomCell = randomNumber(0, arena.length - 1);

  while (arena[randomCell].childElementCount === 1) {
    randomCell = randomNumber(0, 15);
  }

  arena[randomCell].insertAdjacentElement('afterbegin', enemy);
}

setInterval(enemyChange, 1000);
