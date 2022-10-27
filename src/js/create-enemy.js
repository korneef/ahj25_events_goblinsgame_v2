export default function makeEnemy(img) {
  const image = document.createElement('img');
  image.src = img;
  image.className = 'enemy';
  image.id = 'enemy-face';
  return image;
}
