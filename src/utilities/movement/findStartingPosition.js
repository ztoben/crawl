import {MAP_SIZE} from '../map/constants';
import {FLOOR} from '../tiles/constants';

export function findStartingPosition(map) {
  for (let x = 0; x < MAP_SIZE; x++) {
    for (let y = 0; y < MAP_SIZE; y++) {
      if (map[x][y].type === FLOOR) return [x, y];
    }
  }

  return [1, 1];
}
