export default function makeEnemyDeath(img) {
  const image = document.createElement('img');
  image.src = img;
  image.className = 'enemy-death';
  image.id = 'enemy-death-face';
  return image;
}
