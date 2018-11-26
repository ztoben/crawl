import {MAP_SIZE} from './constants';
import {setTileType} from '../tiles/setTileType';

function normalize(value) {
  if (value < 0) return 0;
  if (value > MAP_SIZE) return MAP_SIZE;

  return value;
}

export function updateDiscoveredTiles(map, position) {
  const [posX, posY] = position;

  for (let x = normalize(posX - 3); x < normalize(posX + 3); x++) {
    for (let y = normalize(posY - 3); y < normalize(posY + 3); y++) {
      const tile = map[x][y];

      setTileType(tile, tile.type, [x, y], true);
    }
  }

  return map;
}
