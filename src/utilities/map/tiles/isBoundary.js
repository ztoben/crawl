import {BOUNDARY} from './tileTypes';

export function isBoundary(tile) {
  return BOUNDARY === tile.type;
}
