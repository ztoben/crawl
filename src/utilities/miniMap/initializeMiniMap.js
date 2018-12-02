import {MAP_SIZE} from '../map/constants';
import React from 'react';
import {getMiniMapTileColor} from './getMiniMapTileColor';

export function initializeMiniMap(miniMapPng, map) {
  for (let x = 0; x < MAP_SIZE; x++) {
    for (let y = 0; y < MAP_SIZE; y++) {
      const color = getMiniMapTileColor(map[x][y], [x, y]);

      miniMapPng.setPixel(y + y, x + x, color);
      miniMapPng.setPixel(y + y + 1, x + x, color);
      miniMapPng.setPixel(y + y, x + x + 1, color);
      miniMapPng.setPixel(y + y + 1, x + x + 1, color);
    }
  }
}
