import {normalizeCoordinate} from '../helpers';

export function normalizePosition(prevPosition) {
  return [normalizeCoordinate(prevPosition[0]), normalizeCoordinate(prevPosition[1])];
}
