import {MAP_SIZE} from '../map/constants';

function containCoordinateToBounds(coord) {
  if (coord < 0) return 0;
  if (coord >= MAP_SIZE) return MAP_SIZE - 1;

  return coord;
}

export function normalizePosition(prevPosition) {
  return [containCoordinateToBounds(prevPosition[0]), containCoordinateToBounds(prevPosition[1])]
}
