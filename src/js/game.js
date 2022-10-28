import goblinDeathImage from '../img/goblin_crash.png';
import goblinImage from '../img/goblin.png';
import Game from './gameClass';

const game = new Game();

game.makeEnemy(goblinImage);
game.makeEnemyDeath(goblinDeathImage);

const newGameButton = document.getElementById('new-game-button');
if (newGameButton) {
  newGameButton.addEventListener('click', () => {
    if (game.timerId != null) {
      clearInterval(game.timerId);
    }
    const lossesCount = document.getElementById('losses-count');
    lossesCount.textContent = '0';
    const pointsCount = document.getElementById('points-count');
    pointsCount.textContent = '0';
    game.startGame();
  });
}

const clickOnGoblin = (event) => {
  const goblinTarget = event.target.closest('.game-cell');
  const goblinImg = goblinTarget.querySelector('.enemy');

  if (goblinImg === game.enemy) {
    game.enemy.remove();
    goblinTarget.insertAdjacentElement('afterbegin', game.enemyDeath);
    game.pointsCount += 1;
  }
};

if (document.getElementById('arena')) {
  document.getElementById('arena').addEventListener('click', clickOnGoblin);
}
