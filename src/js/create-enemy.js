import demonImage from '../img/goblin.png';

function makeEnemy(img) {
  const image = document.createElement('img');
  image.src = img;
  image.className = 'enemy';
  image.id = 'enemy-face';
  return image;
}

// eslint-disable-next-line import/prefer-default-export
export const enemy = makeEnemy(demonImage);
