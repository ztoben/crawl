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

  for (let posX = x; posX < x + dungeon.width; posX++) {
    for (let posY = y; posY < y + dungeon.height; posY++) {
      setTileType(map[posX][posY], FLOOR);
    }
  }
}
