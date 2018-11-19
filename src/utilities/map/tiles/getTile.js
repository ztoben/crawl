export function getTile(map, position) {
  const [x, y] = position;

  return map[x][y];
}
