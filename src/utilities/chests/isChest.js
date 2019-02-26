import {CHEST} from './constants';

export function isChest(tile) {
  return CHEST === tile.type;
}
