import any from '@travi/any';
import {MAP_SIZE} from './constants';

export function initializeMap() {
  const map = [];

  for (let x = 0; x < MAP_SIZE; x++) {
    let row = [];

    for (let y = 0; y < MAP_SIZE; y++) {
      row.push({
        type: 'tile',
        index: [x, y],
        content: any.fromList(['*', '|', '_'])
      });
    }

    map.push(row);
  }

  return map;
}
