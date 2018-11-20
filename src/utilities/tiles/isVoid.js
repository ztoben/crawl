import {VOID} from './constants';

export function isVoid(tile) {
  return VOID === tile.type;
}
