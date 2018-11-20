import any from '@travi/any';
import {buildDungeon} from './buildDungeon';
import {checkValidDungeonPlacement} from './checkValidDungeonPlacement';
import {range} from '..';
import {MAP_SIZE} from '../map/constants';
import {FLOOR} from '../tiles/constants';
import {setTileType} from '../tiles/setTileType';

export function addDungeonToMap(map) {
  const dungeon = buildDungeon();
  let isValidPosition = false;
  let x = 1;
  let y = 1;

  while (!isValidPosition) {
    isValidPosition = checkValidDungeonPlacement([x, y], map, dungeon);

    if (!isValidPosition) {
      x = any.fromList(range(MAP_SIZE - dungeon.width, 0));
      y = any.fromList(range(MAP_SIZE - dungeon.height, 0));
    }
  }

  for (let posX = x, dungeonPosX = 0; posX < x + dungeon.width; posX++, dungeonPosX++) {
    for (let posY = y, dungeonPosY = 0; posY < y + dungeon.height; posY++, dungeonPosY++) {
      if (dungeon.dungeonMap[dungeonPosX][dungeonPosY] === 'X') setTileType(map[posX][posY], FLOOR);
    }
  }
}
