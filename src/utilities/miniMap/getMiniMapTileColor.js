import {isArrayEqual} from '..';
import {BOUNDARY, FLOOR, VOID} from '../tiles/constants';

export function getMiniMapTileColor(tile, currPosition, selectedPosition) {
  const {discoveredPercent} = tile;

  if (isArrayEqual(selectedPosition, currPosition)) return 'red';
  if (tile.type === BOUNDARY) return 'white';
  if (tile.type === FLOOR && discoveredPercent > 0) return 'lightgray';
  if (tile.type === VOID && discoveredPercent > 0) return 'black';

  return 'gray';
}
