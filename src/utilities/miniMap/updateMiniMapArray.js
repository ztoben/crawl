import {MAP_SIZE} from '../map/constants';
import {Rect} from 'react-konva';
import any from '@travi/any';
import React from 'react';
import {getMiniMapTileColor} from './getMiniMapTileColor';

export function updateMiniMapArray(newMiniMapArray, x, y, tile, newPosition) {
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
