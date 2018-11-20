import {MAP_SIZE} from '../map/constants';

function containCoordinateToBounds(coordinate) {
  if (coordinate < 0) return 0;
  if (coordinate >= MAP_SIZE) return MAP_SIZE - 1;

  return coordinate;
}

export function normalizePosition(prevPosition) {
  return [containCoordinateToBounds(prevPosition[0]), containCoordinateToBounds(prevPosition[1])];
}
