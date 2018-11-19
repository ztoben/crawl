import buildTileContent from "../tiles/buildTileContent";
import {isOuterBoundary} from "./isOuterBoundary";
import {MAP_SIZE} from './constants';
import {getStyle} from './getStyle';

export function initializeMap() {
  const map = [];

  for (let x = 0; x < MAP_SIZE; x++) {
    let row = [];

    for (let y = 0; y < MAP_SIZE; y++) {
      const boundary = isOuterBoundary([x, y]);
      const type = boundary ? 'boundary' : 'tile';
      const index = [x, y];

      row.push({
        type,
        index,
        content: buildTileContent(type, index),
        style: getStyle(type)
      });
    }

    map.push(row);
  }

  return map;
}
