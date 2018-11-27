import buildTileContent from './buildTileContent';
import {getStyle} from '../map/getStyle';

export function setTileType(map, type, position, discoveredPercent) {
  const [x, y] = position;

  map[x][y].type = type;
  map[x][y].content = buildTileContent(type, position);
  map[x][y].style = getStyle(type, discoveredPercent);
  map[x][y].discoveredPercent = discoveredPercent;
}
