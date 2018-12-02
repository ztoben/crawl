import {toggleSelectedTile, updateTile, getTile} from '../tiles';
import {initializeMiniMap, updateMiniMapArray} from '../miniMap';
import {normalizeCoordinate} from '../helpers';
import {VIEW_DISTANCE} from './constants';

function getDiscoveredPercent(x, y, posX, posY) {
  if (x === posX || y === posY) return 1;
  if (x === posX - 1 || x === posX + 1) return 0.75;
  if (y === posY - 1 || y === posY + 1) return 0.75;
  if (x === posX - 2 || x === posX + 2) return 0.5;
  if (y === posY - 2 || y === posY + 2) return 0.5;
  return 0.25;
}

function setSelected(map, newPosition, oldPosition) {
  if (oldPosition) toggleSelectedTile(getTile(map, oldPosition));
  toggleSelectedTile(getTile(map, newPosition));
}

function updateMapTile(map, x, y, tile, addedPercent) {
  map[x][y] = updateTile(map, tile.type, [x, y], Math.max(addedPercent, tile.discoveredPercent));
}

function updateMapTilesAndMiniMap(posX, posY, newMap, miniMapPng, newPosition) {
  for (
    let x = normalizeCoordinate(posX - VIEW_DISTANCE);
    x < normalizeCoordinate(posX + VIEW_DISTANCE);
    x++
  ) {
    for (
      let y = normalizeCoordinate(posY - VIEW_DISTANCE);
      y < normalizeCoordinate(posY + VIEW_DISTANCE);
      y++
    ) {
      const addedPercent = getDiscoveredPercent(x, y, posX, posY);
      const tile = newMap[x][y];

      updateMapTile(newMap, x, y, tile, addedPercent);
      updateMiniMapArray(miniMapPng, x, y, newMap[x][y], newPosition);
    }
  }
}

export function updateMaps(map, miniMapPng, newPosition, oldPosition) {
  const newMap = [...map];
  const [posX, posY] = newPosition;

  initializeMiniMap(miniMapPng, newMap, newPosition);
  updateMapTilesAndMiniMap(posX, posY, newMap, miniMapPng, newPosition);
  setSelected(newMap, newPosition, oldPosition);

  return {
    newMap,
  };
}
