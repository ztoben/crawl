import {
  BOTTOM_LEFT_BORDER, BOTTOM_RIGHT_BORDER,
  HORIZONTAL_BORDER,
  TOP_LEFT_BORDER,
  TOP_RIGHT_BORDER,
  VERTICAL_BORDER
} from './tileIndicators';
import {MAP_SIZE} from '../map/constants';

export function buildBorderContent(position) {
  const [x, y] = position;
  const maxMap = MAP_SIZE - 1;

  if (x === 0) {
    if (y === 0) {
      return TOP_LEFT_BORDER;
    }

    if (y === maxMap) {
      return TOP_RIGHT_BORDER;
    }

    return HORIZONTAL_BORDER;
  }

  if (y === 0) {
    if (x === maxMap) return BOTTOM_LEFT_BORDER;

    return VERTICAL_BORDER;
  }

  if (x === maxMap) {
    if (y === maxMap) return BOTTOM_RIGHT_BORDER;

    return HORIZONTAL_BORDER;
  }

  return VERTICAL_BORDER;
}
