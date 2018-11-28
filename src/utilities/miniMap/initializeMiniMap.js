import {MAP_SIZE} from '../map/constants';
import {Rect} from 'react-konva';
import any from '@travi/any';
import React from 'react';
import {getMiniMapTileColor} from './getMiniMapTileColor';

export function initializeMiniMap(miniMapArray, newMap, newPosition) {
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
