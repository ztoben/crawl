import {MAP_SIZE} from "./constants";

export default function isBoundary(x, y) {
  if (x === 0 || y === 0) return true;
  return x === (MAP_SIZE - 1) || y === (MAP_SIZE - 1);
}