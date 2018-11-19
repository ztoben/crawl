import any from '@travi/any';
import {BOUNDARY} from "./tileTypes";
import {MAP_SIZE} from "../map/constants";

export default function buildTileContent(type, position) {
  if (type !== BOUNDARY) return any.fromList(['*', '-', '<', '>']);

  const [x, y] = position;
  const maxMap = MAP_SIZE - 1;

  if (x === 0) {
    if (y === 0 || y === maxMap) {
      return '\u25a1';
    }

    return '-';
  }

  if (y === 0) {
    if (x === maxMap) return '\u25a1';

    return '|';
  }

  if (x === maxMap) {
    if (y === 0 || y === maxMap) return '\u25a1';

    return '-';
  }

  if (y === maxMap) {
    if (x === maxMap) return '\u25a1';

    return '|';
  }

  return '\u25a1';
}
