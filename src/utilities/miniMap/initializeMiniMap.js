import {MAP_SIZE} from '../map/constants';
import React from 'react';
import {getMiniMapTileColor} from './getMiniMapTileColor';
let miniMapInitialized = false;

export function initializeMiniMap(miniMapPng, newMap, newPosition) {
  if (!miniMapInitialized) {
    for (let x = 0; x < MAP_SIZE; x++) {
      for (let y = 0; y < MAP_SIZE; y++) {
        const tile = newMap[x][y];
        const color = getMiniMapTileColor(getMiniMapTileColor(tile, [x, y], newPosition));

        miniMapPng.setPixel(y + y, x + x, color);
        miniMapPng.setPixel(y + y + 1, x + x, color);
        miniMapPng.setPixel(y + y, x + x + 1, color);
        miniMapPng.setPixel(y + y + 1, x + x + 1, color);
      }
    }
    miniMapInitialized = true;
  }
}
