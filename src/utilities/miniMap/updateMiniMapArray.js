import React from 'react';
import {getMiniMapTileColor} from './getMiniMapTileColor';

export function updateMiniMapArray(miniMapPng, x, y, tile, newPosition) {
  const color = getMiniMapTileColor(tile, [x, y], newPosition);

  miniMapPng.setPixel(y + y, x + x, color);
  miniMapPng.setPixel(y + y + 1, x + x, color);
  miniMapPng.setPixel(y + y, x + x + 1, color);
  miniMapPng.setPixel(y + y + 1, x + x + 1, color);
}
