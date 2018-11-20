import buildTileContent from './buildTileContent';
import {getStyle} from '../map/getStyle';

export function setTileType(tile, type) {
  tile.type = type;
  tile.content = buildTileContent(type);
  tile.style = getStyle(type);
}
