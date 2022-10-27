import { enemy, enemyDeath } from './game';

const arena = document.getElementsByClassName('game-arena')[0];

const clickOnGoblin = (event) => {
  const goblinTarget = event.target.closest('.game-cell');
  const goblinImg = goblinTarget.querySelector('.enemy');

  if (goblinImg === enemy) {
    enemy.remove();
    goblinTarget.insertAdjacentElement('afterbegin', enemyDeath);
    const pointsCount = document.getElementById('points-count');
    pointsCount.textContent = 1 + Number(pointsCount.textContent);
  }
};

arena.addEventListener('click', clickOnGoblin);
