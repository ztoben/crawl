import {WALL} from './constants';

export function isWall(tile) {
  return WALL === tile.type;
}
