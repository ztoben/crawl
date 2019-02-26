import {buildTileContent} from './buildTileContent';
import {getTile} from './getTile';
import {getStyle} from '../map';

export function updateTile(map, type, position, discoveredPercent) {
  const tile = {...getTile(map, position)};

  tile.type = type;
  tile.content = buildTileContent(type, position);
  tile.style = getStyle(type, discoveredPercent);
  tile.discoveredPercent = discoveredPercent;

  return tile;
}
