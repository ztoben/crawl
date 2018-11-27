import {VOID} from '../tiles/constants';
import {MAP_SIZE} from '../map/constants';

export function checkValidDungeonLocation(position, map, dungeon) {
  const [posX, posY] = position;

  for (let x = posX; x < posX + dungeon.width; x++) {
    for (let y = posY; y < posY + dungeon.height; y++) {
      if (map[x][y].type !== VOID) return false;
    }
  }

  return true;
}

export function checkValidDungeon(dungeon) {
  return dungeon.width < MAP_SIZE && dungeon.height < MAP_SIZE;
}
