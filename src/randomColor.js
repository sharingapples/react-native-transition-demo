const colors = [
  'tan',
  'lightgreen',
  'lightblue',
  'lightpink',
  'lightcyan',
  'wheat',
  'lightyellow',
  'beige',
];

export default function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
