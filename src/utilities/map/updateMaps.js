import {MAP_SIZE, VIEW_DISTANCE} from './constants';
import {updateTile} from '../tiles/updateTile';
import {getTile, isArrayEqual} from '..';
import {Rect} from 'react-konva';
import React from 'react';
import {BOUNDARY, FLOOR, VOID} from '../tiles/constants';
import any from '@travi/any';

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

function getMiniMapTileColor(tile, currPosition, selectedPosition) {
  const {discoveredPercent} = tile;

  if (isArrayEqual(selectedPosition, currPosition)) return 'blue';
  if (tile.type === BOUNDARY) return 'white';
  if (discoveredPercent === 0) return 'lightgray';
  if (tile.type === FLOOR) return 'gray';
  if (tile.type === VOID) return 'black';

  return '';
}

function initializeMiniMap(miniMapArray, newMap, newPosition) {
  const newMiniMapArray = [...miniMapArray];

  if (newMiniMapArray.length === 0) {
    for (let x = 0; x < MAP_SIZE; x++) {
      for (let y = 0; y < MAP_SIZE; y++) {
        const tile = newMap[x][y];

        newMiniMapArray.push(
          <Rect
            x={y * 2}
            y={x * 2}
            width={2}
            height={2}
            fill={getMiniMapTileColor(tile, [x, y], newPosition)}
            key={any.string()}
          />
        );
      }
    }
  }

  return newMiniMapArray;
}

function updateMapTile(newMap, x, y, tile, addedPercent) {
  newMap[x][y] = updateTile(
    newMap,
    tile.type,
    [x, y],
    Math.max(addedPercent, tile.discoveredPercent)
  );
}

function updateMiniMapArray(newMiniMapArray, x, y, tile, newPosition) {
  newMiniMapArray[x * MAP_SIZE + y] = (
    <Rect
      x={y * 2}
      y={x * 2}
      width={2}
      height={2}
      fill={getMiniMapTileColor(tile, [x, y], newPosition)}
      key={any.string()}
    />
  );
}

function updateMapTilesAndMiniMap(posX, posY, newMap, newMiniMapArray, newPosition) {
  for (let x = normalize(posX - VIEW_DISTANCE); x < normalize(posX + VIEW_DISTANCE); x++) {
    for (let y = normalize(posY - VIEW_DISTANCE); y < normalize(posY + VIEW_DISTANCE); y++) {
      const addedPercent = getDiscoveredPercent(x, y, posX, posY);
      const tile = newMap[x][y];

      updateMapTile(newMap, x, y, tile, addedPercent);
      updateMiniMapArray(newMiniMapArray, x, y, tile, newPosition);
    }
  }
}

export function updateMaps(map, miniMap, newPosition, oldPosition) {
  console.time('updateMaps');
  const newMap = [...map];
  const [posX, posY] = newPosition;
  const newMiniMapArray = initializeMiniMap(miniMap, newMap, newPosition);

  updateMapTilesAndMiniMap(posX, posY, newMap, newMiniMapArray, newPosition);
  setSelected(newMap, newPosition, oldPosition);

  console.timeEnd('updateMaps');

  return {
    newMap,
    newMiniMapArray,
  };
}
