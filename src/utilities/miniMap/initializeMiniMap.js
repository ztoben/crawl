import {MAP_SIZE} from '../map/constants';
import React from 'react';
import {getMiniMapTileColor} from './getMiniMapTileColor';
import PNGlib from 'node-pnglib';

export function initializeMiniMap(map) {
  const miniMap = new PNGlib(200, 200);

  for (let x = 0; x < MAP_SIZE; x++) {
    for (let y = 0; y < MAP_SIZE; y++) {
      const color = getMiniMapTileColor(map[x][y], [x, y]);

      miniMap.setPixel(y + y, x + x, color);
      miniMap.setPixel(y + y + 1, x + x, color);
      miniMap.setPixel(y + y, x + x + 1, color);
      miniMap.setPixel(y + y + 1, x + x + 1, color);
    }
  }

  return miniMap;
}
