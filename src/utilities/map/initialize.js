import {connectDungeons, populateDungeons} from '../dungeons';
import {isOuterBoundary} from './isOuterBoundary';
import {MAP_SIZE} from './constants';
import {getStyle} from './getStyle';
import {BOUNDARY, VOID} from '../tiles/constants';
import {addChestsToMap} from '../chests';
import {addMonstersToMap} from '../monsters';
import {buildTileContent} from '../tiles';

export async function initializeMap() {
  const map = [];

  for (let x = 0; x < MAP_SIZE; x++) {
    let row = [];

    for (let y = 0; y < MAP_SIZE; y++) {
      const boundary = isOuterBoundary([x, y]);
      const type = boundary ? BOUNDARY : VOID;
      const index = [x, y];
      const discoveredPercent = 0;

      row.push({
        type,
        index,
        content: buildTileContent(type, index),
        style: getStyle(type, discoveredPercent),
        discoveredPercent,
      });
    }

    map.push(row);
  }

  const populatedDungeons = populateDungeons(map);
  const connectedMap = await connectDungeons(map, populatedDungeons);

  addChestsToMap(connectedMap);
  addMonstersToMap(connectedMap);

  return {
    map: connectedMap,
    dungeons: populatedDungeons,
  };
}
