import makeEnemy from './create-enemy';
import makeEnemyDeath from './create-death-enemy';
import randomNumber from './random-number';
import goblinDeathImage from '../img/goblin_crash.png';
import goblinImage from '../img/goblin.png';

export const enemyDeath = makeEnemyDeath(goblinDeathImage);
export const enemy = makeEnemy(goblinImage);

let timerId;

export function gameOver() {
  if (!(document.querySelectorAll('.enemy').length === 0)) {
    const lossesCount = document.getElementById('losses-count');
    lossesCount.textContent = 1 + Number(lossesCount.textContent);

    if (Number(lossesCount.textContent) >= 5) {
      enemy.remove();
      // eslint-disable-next-line no-alert
      alert('GameOver');
      clearInterval(timerId);
      return 1;
    }
  }
  return null;
}

function gaming() {
  if (gameOver() === 1) {
    return;
  }

  const deathFace = document.getElementById('enemy-death-face');
  const arena = Array.from(document.getElementsByClassName('game-cell'));
  let randomCell = randomNumber(0, arena.length - 1);

  while (arena[randomCell].childElementCount === 1) {
    randomCell = randomNumber(0, arena.length - 1);
  }

  arena[randomCell].insertAdjacentElement('afterbegin', enemy);

  if (deathFace === enemyDeath) {
    deathFace.remove();
  }
}

const newGameButton = document.getElementById('new-game-button');
if (newGameButton) {
  newGameButton.addEventListener('click', () => {
    const lossesCount = document.getElementById('losses-count');
    lossesCount.textContent = '0';
    const pointsCount = document.getElementById('points-count');
    pointsCount.textContent = '0';
    timerId = setInterval(gaming, 1000);
  });
}
