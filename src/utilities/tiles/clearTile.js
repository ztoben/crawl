import {FLOOR} from './constants';

export function clearTile(position, map) {
  const [x, y] = position;

  map[x][y].type = FLOOR;
  map[x][y].data = undefined;
}
