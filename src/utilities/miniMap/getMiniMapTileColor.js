import {isArrayEqual} from '..';
import {BOUNDARY, FLOOR, VOID} from '../tiles/constants';

export function getMiniMapTileColor(tile, currPosition, selectedPosition) {
  const {discoveredPercent} = tile;

  if (isArrayEqual(selectedPosition, currPosition)) return '#aa000f'; //red
  if (tile.type === BOUNDARY) return '#fff'; //white
  if (tile.type === FLOOR && discoveredPercent > 0) return '#949494'; //lightgray
  if (tile.type === VOID && discoveredPercent > 0) return '#000000'; //black

  return '#555555'; //gray
}
