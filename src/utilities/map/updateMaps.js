import {MAP_SIZE, VIEW_DISTANCE} from './constants';
import {setTileType} from '../tiles/setTileType';
import {getTile, isArrayEqual} from '..';
import {Rect} from 'react-konva';
import React from 'react';
import {BOUNDARY, FLOOR, VOID} from '../tiles/constants';

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

function getTileColor(tile, currPosition, selectedPosition) {
  const {discoveredPercent} = tile;

  if (isArrayEqual(selectedPosition, currPosition)) return 'red';
  if (tile.type === BOUNDARY) return 'white';
  if (discoveredPercent === 0) return 'lightgray';
  if (tile.type === FLOOR) return 'gray';
  if (tile.type === VOID) return 'black';

  return '';
}

export function updateMaps(map, newPosition, oldPosition) {
  const newMap = JSON.parse(JSON.stringify(map));
  const [posX, posY] = newPosition;
  const newMiniMapArray = [];

  for (let x = 0; x < MAP_SIZE; x++) {
    for (let y = 0; y < MAP_SIZE; y++) {
      const tile = newMap[x][y];

      if (
        x >= normalize(posX - VIEW_DISTANCE) &&
        x < normalize(posX + VIEW_DISTANCE) &&
        y >= normalize(posY - VIEW_DISTANCE) &&
        y < normalize(posY + VIEW_DISTANCE)
      ) {
        const addedPercent = getDiscoveredPercent(x, y, posX, posY);

        setTileType(newMap, tile.type, [x, y], Math.max(addedPercent, tile.discoveredPercent));
      }

      newMiniMapArray.push(
        <Rect
          x={y * 2}
          y={x * 2}
          width={2}
          height={2}
          fill={getTileColor(tile, [x, y], newPosition)}
          key={`[${x},${y}]`}
        />
      );
    }
  }

  setSelected(newMap, newPosition, oldPosition);

  return {
    newMap,
    newMiniMapArray,
  };
}
