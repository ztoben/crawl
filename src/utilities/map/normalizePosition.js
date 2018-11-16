import {MAP_SIZE} from './constants';

function normalizeCoordinate(coord) {
  if (coord < 0) return 0;
  if (coord > MAP_SIZE) return MAP_SIZE;

  return coord;
}

export function normalizePosition(prevPosition) {
  return [normalizeCoordinate(prevPosition[0]), normalizeCoordinate(prevPosition[1])]
}
