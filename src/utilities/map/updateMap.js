import {MAP_SIZE, VIEW_DISTANCE} from './constants';
import {setTileType} from '../tiles/setTileType';
import {getTile} from '..';

function normalize(value) {
  if (value < 0) return 0;
  if (value > MAP_SIZE) return MAP_SIZE;

  return value;
}

function getDiscoveredPercent(x, y, posX, posY) {
  if (x === posX || y === posY) return 1;
  if (x === posX - 1 || x === posX + 1) return 0.75;
  if (y === posY - 1 || y === posY + 1) return 0.75;
  if (x === posX - 2 || x === posX + 2) return 0.5;
  if (y === posY - 2 || y === posY + 2) return 0.5;
  return 0.25;
}

function setSelected(map, newPosition, oldPosition) {
  if (oldPosition) getTile(map, oldPosition).selected = false;
  getTile(map, newPosition).selected = true;
}

export function updateMap(map, newPosition, oldPosition) {
  const newMap = JSON.parse(JSON.stringify(map));
  const [posX, posY] = newPosition;

  for (let x = normalize(posX - VIEW_DISTANCE); x < normalize(posX + VIEW_DISTANCE); x++) {
    for (let y = normalize(posY - VIEW_DISTANCE); y < normalize(posY + VIEW_DISTANCE); y++) {
      const addedPercent = getDiscoveredPercent(x, y, posX, posY);
      const tile = newMap[x][y];

      setTileType(newMap, tile.type, [x, y], Math.max(addedPercent, tile.discoveredPercent));
    }
  }

  setSelected(newMap, newPosition, oldPosition);

  return newMap;
}
