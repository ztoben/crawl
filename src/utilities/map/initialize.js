import buildTileContent from '../tiles/buildTileContent';
import {isOuterBoundary} from './isOuterBoundary';
import {MAP_SIZE, MAX_NUMBER_DUNGEONS, MIN_NUMBER_DUNGEONS} from './constants';
import {getStyle} from './getStyle';
import {BOUNDARY, VOID} from '../tiles/constants';
import {addDungeonToMap} from '../dungeons/addDungeonToMap';
import any from '@travi/any';
import {range} from '..';

export function initializeMap() {
  const map = [];

  for (let x = 0; x < MAP_SIZE; x++) {
    let row = [];

    for (let y = 0; y < MAP_SIZE; y++) {
      const boundary = isOuterBoundary([x, y]);
      const type = boundary ? BOUNDARY : VOID;
      const index = [x, y];

      row.push({
        type,
        index,
        content: buildTileContent(type, index),
        style: getStyle(type),
      });
    }

    map.push(row);
  }

  for (
    let dungeons = 0;
    dungeons < any.fromList(range(MAX_NUMBER_DUNGEONS, MIN_NUMBER_DUNGEONS));
    dungeons++
  ) {
    addDungeonToMap(map);
  }

  return map;
}
