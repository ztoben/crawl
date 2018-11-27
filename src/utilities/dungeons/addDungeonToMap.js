import any from '@travi/any';
import {buildDungeon} from './buildDungeon';
import {checkValidDungeonPlacement} from './checkValidDungeonPlacement';
import {range} from '..';
import {MAP_SIZE} from '../map/constants';
import {FLOOR} from '../tiles/constants';
import {setTileType} from '../tiles/setTileType';
import {MAX_DUNGEON_TRIES, MAX_POSITION_TRIES} from './constants';

function tileIsDungeon(dungeon, dungeonPosX, dungeonPosY) {
  const tile = dungeon.dungeonMap[dungeonPosX][dungeonPosY];
  return tile === 'X' || tile === 'B';
}

export function addDungeonToMap(map) {
  let dungeon = buildDungeon();
  let isValidPosition = false;
  let mapFull = false;
  let dungeonTries = 0;
  let positionTries = 0;
  let x = 1;
  let y = 1;

  while (!isValidPosition && dungeonTries < MAX_DUNGEON_TRIES) {
    isValidPosition = checkValidDungeonPlacement([x, y], map, dungeon);

    if (!isValidPosition) {
      positionTries++;
      x = any.fromList(range(MAP_SIZE - dungeon.width, 0));
      y = any.fromList(range(MAP_SIZE - dungeon.height, 0));
    }

    if (positionTries === MAX_POSITION_TRIES) {
      positionTries = 0;
      dungeonTries++;
      dungeon = buildDungeon();
    }
  }

  if (dungeonTries === MAX_DUNGEON_TRIES) mapFull = true;

  if (!mapFull) {
    for (let posX = x, dungeonPosX = 0; posX < x + dungeon.width; posX++, dungeonPosX++) {
      for (let posY = y, dungeonPosY = 0; posY < y + dungeon.height; posY++, dungeonPosY++) {
        if (tileIsDungeon(dungeon, dungeonPosX, dungeonPosY))
          setTileType(map, FLOOR, [posX, posY], 0);
      }
    }
  }

  return {
    mapFull,
    position: [x, y],
    dungeon,
  };
}
