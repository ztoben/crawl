import {BOUNDARY} from './constants';

export function isBoundary(tile) {
  return BOUNDARY === tile.type;
}
