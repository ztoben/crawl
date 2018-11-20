import {VOID} from '../tiles/constants';

export function checkValidDungeonPlacement(position, map, dungeon) {
  const [posX, posY] = position;

  for (let x = posX; x < posX + dungeon.width; x++) {
    for (let y = posY; y < posY + dungeon.height; y++) {
      if (map[x][y].type !== VOID) return false;
    }
  }

  return true;
}
