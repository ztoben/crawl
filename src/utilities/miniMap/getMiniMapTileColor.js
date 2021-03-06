import {isArrayEqual} from '..';
import {BOUNDARY, FLOOR, VOID} from '../tiles/constants';
import {CHEST} from '../chests/constants';
import {MONSTER} from '../monsters/constants';

function getColor(selectedPosition, currPosition, discoveredPercent, tile) {
  if (selectedPosition && isArrayEqual(selectedPosition, currPosition)) return 'blue';
  if (tile.type === BOUNDARY) return '#fff'; //white
  if (tile.type === FLOOR && discoveredPercent > 0) return '#949494'; //lightgray
  if (tile.type === VOID && discoveredPercent > 0) return '#000000'; //black
  if (tile.type === CHEST && discoveredPercent > 0) return '#32CD32'; //green
  if (tile.type === MONSTER && discoveredPercent > 0) return '#FF0000'; //red

  return '#555555'; //gray
}

export function getMiniMapTileColor(tile, currPosition, selectedPosition) {
  const {discoveredPercent} = tile;
  return getColor(selectedPosition, currPosition, discoveredPercent, tile);
}
