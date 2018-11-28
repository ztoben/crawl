import {MAP_SIZE} from '../map/constants';

export function normalizeCoordinate(value) {
  if (value < 0) return 0;
  if (value > MAP_SIZE) return MAP_SIZE;

  return value;
}
