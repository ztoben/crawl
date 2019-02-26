import {isArrayEqual} from '..';
import {BOUNDARY, FLOOR, VOID} from '../tiles/constants';
import {CHEST} from '../chests/constants';

function getColor(selectedPosition, currPosition, discoveredPercent, tile) {
  if (selectedPosition && isArrayEqual(selectedPosition, currPosition)) return 'blue'; //red
  if (tile.type === BOUNDARY) return '#fff'; //white
  if (tile.type === FLOOR && discoveredPercent > 0) return '#949494'; //lightgray
  if (tile.type === VOID && discoveredPercent > 0) return '#000000'; //black
  if (tile.type === CHEST && discoveredPercent > 0) return '#32CD32'; //green

  return '#555555'; //gray
}

export function getMiniMapTileColor(tile, currPosition, selectedPosition) {
  const {discoveredPercent} = tile;
  return getColor(selectedPosition, currPosition, discoveredPercent, tile);
}
