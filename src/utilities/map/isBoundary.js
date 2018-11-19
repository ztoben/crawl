import {MAP_SIZE} from "./constants";

export function isBoundary(position) {
  const [x, y] = position;

  if (x === 0 || y === 0) return true;
  return x === (MAP_SIZE - 1) || y === (MAP_SIZE - 1);
}
