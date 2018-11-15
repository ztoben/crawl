import {VIEW_SIZE, MAP_SIZE} from './constants';

function normalizePosition(pos) {
  if (pos < (VIEW_SIZE / 2)) return 0;
  if (pos > (MAP_SIZE - (VIEW_SIZE / 2))) return MAP_SIZE - VIEW_SIZE;

  return pos;
}

export default function getViewingArea(position, map) {
  const [posX, posY] = position;
  const viewingArea = [];

  const normalizedX = normalizePosition(posX);
  const normalizedY = normalizePosition(posY);

  for (let x = normalizedX; x < normalizedX + VIEW_SIZE; x++) {
    let row = [];

    for (let y = normalizedY; y < normalizedY + VIEW_SIZE; y++) {
      row.push(map[x][y]);
    }

    viewingArea.push(row);
  }

  return viewingArea;
}
