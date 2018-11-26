export function findBoundingPoint(dungeon) {
  for (let x = 0; x < dungeon.length; x++) {
    for (let y = 0; y < dungeon[0].length; y++) {
      if (dungeon[x][y] === 'B') return [x, y];
    }
  }

  return [0, 0];
}
