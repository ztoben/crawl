import {WALL} from './tileTypes';

export function isWall(tile) {
  return WALL === tile.type;
}
