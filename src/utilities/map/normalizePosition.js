import {MAP_SIZE} from './constants';

export function normalizePosition(position) {
  if (position < 0) return 0;
  if (position > MAP_SIZE) return MAP_SIZE;

  return position;
}
