import buildTileContent from './buildTileContent';
import {getStyle} from '../map/getStyle';

export function setTileType(map, type, position, discoveredPercent) {
  const newMap = [...map];
  const [x, y] = position;

  newMap[x][y].type = type;
  newMap[x][y].content = buildTileContent(type, position);
  newMap[x][y].style = getStyle(type, discoveredPercent);
  newMap[x][y].discoveredPercent = discoveredPercent;

  return newMap;
}
