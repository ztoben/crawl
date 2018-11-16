import {MAP_SIZE} from './constants';
import isBoundary from "./isBoundary";
import buildTileContent from "./tiles/buildTileContent";

export function initializeMap() {
  const map = [];

  for (let x = 0; x < MAP_SIZE; x++) {
    let row = [];

    for (let y = 0; y < MAP_SIZE; y++) {
      const boundary = isBoundary(x, y);
      const type = boundary ? 'boundary' : 'tile';
      const index = [x, y];

      row.push({
        type,
        index,
        content: buildTileContent(type, index)
      });
    }

    map.push(row);
  }

  return map;
}
