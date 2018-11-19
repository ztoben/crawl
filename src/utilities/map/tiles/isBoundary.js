import {BOUNDARY} from './tileTypes';
import {getTile} from './getTile';

export function isBoundary(map, position) {
  const tile = getTile(map, position);

  return BOUNDARY === tile.type;
}
