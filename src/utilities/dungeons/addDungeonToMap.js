import any from '@travi/any';
import {buildDungeon} from './buildDungeon';
import {checkValidDungeon, checkValidDungeonLocation} from './validators';
import {MAP_SIZE} from '../map/constants';
import {FLOOR} from '../tiles/constants';
import {updateTile} from '../tiles/updateTile';
import {MAX_DUNGEON_TRIES, MAX_POSITION_TRIES} from './constants';

function tileIsDungeon(dungeon, dungeonPosX, dungeonPosY) {
  const tile = dungeon.dungeonMap[dungeonPosX][dungeonPosY];
  return tile === 'X' || tile === 'B';
}

function getRandomCoordinate(dungeon) {
  let x = any.integer({min: 0, max: MAP_SIZE - dungeon.width});
  let y = any.integer({min: 0, max: MAP_SIZE - dungeon.height});

  return [x, y];
}

function getValidDungeon() {
  let dungeon = buildDungeon();
  let isValidDungeon = checkValidDungeon(dungeon);

  while (!isValidDungeon) {
    dungeon = buildDungeon();
    isValidDungeon = checkValidDungeon(dungeon);
  }

  return dungeon;
}

export function addDungeonToMap(map) {
  let dungeon = getValidDungeon();
  let isValidPosition = false;
  let mapFull = false;
  let dungeonTries = 0;
  let positionTries = 0;
  let [x, y] = getRandomCoordinate(dungeon);

  while (!isValidPosition && dungeonTries < MAX_DUNGEON_TRIES) {
    isValidPosition = checkValidDungeonLocation([x, y], map, dungeon);

    if (!isValidPosition) {
      positionTries++;
      [x, y] = getRandomCoordinate(dungeon);
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
          map[posX][posY] = updateTile(map, FLOOR, [posX, posY], 0);
      }
    }
  }

  return {
    mapFull,
    position: [x, y],
    dungeon,
  };
}
