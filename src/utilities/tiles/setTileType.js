import buildTileContent from './buildTileContent';
import {getStyle} from '../map/getStyle';

export function setTileType(tile, type, position, discovered) {
  tile.type = type;
  tile.content = buildTileContent(type, position, discovered);
  tile.style = getStyle(type);
}
