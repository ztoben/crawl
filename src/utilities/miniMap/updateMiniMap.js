import React from 'react';
import {getMiniMapTileColor} from './getMiniMapTileColor';

export function updateMiniMap(miniMapPng, x, y, tile, selectedPosition) {
  const color = getMiniMapTileColor(tile, [x, y], selectedPosition);

  miniMapPng.setPixel(y + y, x + x, color);
  miniMapPng.setPixel(y + y + 1, x + x, color);
  miniMapPng.setPixel(y + y, x + x + 1, color);
  miniMapPng.setPixel(y + y + 1, x + x + 1, color);
}
