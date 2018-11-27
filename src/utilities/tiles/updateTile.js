import buildTileContent from './buildTileContent';
import {getStyle} from '../map/getStyle';
import {getTile} from './getTile';

export function updateTile(map, type, position, discoveredPercent) {
  const tile = {...getTile(map, position)};

  tile.type = type;
  tile.content = buildTileContent(type, position);
  tile.style = getStyle(type, discoveredPercent);
  tile.discoveredPercent = discoveredPercent;

  return tile;
}
