import {toggleSelectedTile, updateTile, getTile} from '../tiles';
import {updateMiniMap} from '../miniMap';
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

function updateMapTile(map, x, y, tile, addedPercent) {
  map[x][y] = updateTile(map, tile.type, [x, y], Math.max(addedPercent, tile.discoveredPercent));
}

function updateMapTilesAndMiniMap(map, miniMapPng, newPosition, oldPosition) {
  const [posX, posY] = newPosition;

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

      updateMapTile(map, x, y, map[x][y], addedPercent);
      updateMiniMap(miniMapPng, x, y, map[x][y], newPosition);
    }
  }

  if (oldPosition) {
    const [oldX, oldY] = oldPosition;

    for (
      let x = normalizeCoordinate(oldX - VIEW_DISTANCE);
      x < normalizeCoordinate(oldX + VIEW_DISTANCE);
      x++
    ) {
      for (
        let y = normalizeCoordinate(oldY - VIEW_DISTANCE);
        y < normalizeCoordinate(oldY + VIEW_DISTANCE);
        y++
      ) {
        const addedPercent = getDiscoveredPercent(x, y, oldX, oldY);

        updateMapTile(map, x, y, map[x][y], addedPercent);
        updateMiniMap(miniMapPng, x, y, map[x][y], newPosition);
      }
    }
  }
}

export function updateMaps(map, miniMapPng, newPosition, oldPosition) {
  const newMap = [...map];

  updateMapTilesAndMiniMap(newMap, miniMapPng, newPosition, oldPosition);

  return newMap;
}
