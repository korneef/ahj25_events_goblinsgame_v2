export default class Game {
  constructor() {
    this.arena = document.getElementById('arena');
    this.cell = Array.from(document.querySelectorAll('.game-cell'));
    this.random = null;
  }

  randomNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    this.random = Math.round(rand);
  }

  makeEnemy(img) {
    const image = document.createElement('img');
    image.src = img;
    image.className = 'enemy';
    image.id = 'enemy-face';
    this.enemy = image;
    return this.enemy;
  }

  makeEnemyDeath(img) {
    const image = document.createElement('img');
    image.src = img;
    image.className = 'enemy-death';
    image.id = 'enemy-death-face';
    this.enemyDeath = image;
    return this.enemyDeath;
  }

  set pointsCount(number) {
    if (number === 0) {
      this._pointsCount = 0;
      document.getElementById('points-count').textContent = this.pointsCount;
      return;
    }
    this._pointsCount += 1;
    document.getElementById('points-count').textContent = this.pointsCount;
  }

  get pointsCount() {
    return this._pointsCount;
  }

  set lossesCount(number) {
    if (number === 0) {
      this._lossesCount = 0;
      document.getElementById('losses-count').textContent = this.lossesCount;
      return;
    }
    this._lossesCount += 1;
    document.getElementById('losses-count').textContent = this.lossesCount;
    if (this._lossesCount >= 5) {
      this.gameStatus = 'end';
    }
  }

  get lossesCount() {
    return this._lossesCount;
  }

  startGame() {
    this.timerId = setInterval(() => {
      this.gaming();
    }, 1000);
    this.gameStatus = 'process';
    this.lossesCount = 0;
    this.pointsCount = 0;
    this.enemy.remove();
  }

  gameOver() {
    this.enemy.remove();
    // eslint-disable-next-line no-alert
    alert('GameOver');
    clearInterval(this.timerId);
    this.gameStatus = 'end';
    this.timerId = null;
  }

  gaming() {
    if (this.gameStatus === 'end') {
      this.gameOver();
      return;
    }

    if (!(this.arena.querySelectorAll('.enemy').length === 0)) {
      this.lossesCount += 1;
    }

    while (this.random === null || this.cell[this.random].childElementCount === 1) {
      this.randomNumber(0, this.arena.childElementCount - 1);
    }

    this.cell[this.random].insertAdjacentElement('afterbegin', this.enemy);

    const deathFace = document.getElementById('enemy-death-face');
    if (deathFace === this.enemyDeath) {
      deathFace.remove();
    }
  }
}
