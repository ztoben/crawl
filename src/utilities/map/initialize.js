import buildTileContent from '../tiles/buildTileContent';
import {isOuterBoundary} from './isOuterBoundary';
import {MAP_SIZE} from './constants';
import {getStyle} from './getStyle';
import {BOUNDARY, VOID} from '../tiles/constants';
import {populateDungeons} from '../dungeons/populateDungeons';
import {connectDungeons} from '../dungeons/connectDungeons';

export function initializeMap() {
  const map = [];

  for (let x = 0; x < MAP_SIZE; x++) {
    let row = [];

    for (let y = 0; y < MAP_SIZE; y++) {
      const boundary = isOuterBoundary([x, y]);
      const type = boundary ? BOUNDARY : VOID;
      const index = [x, y];
      const discovered = false;

      row.push({
        type,
        index,
        content: buildTileContent(type, index, discovered),
        style: getStyle(type),
        discovered,
      });
    }

    map.push(row);
  }

  const dungeons = populateDungeons(map);

  return {
    map: connectDungeons(map, dungeons),
    dungeons,
  };
}
