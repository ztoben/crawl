import any from '@travi/any';
import {addDungeonToMap} from './addDungeonToMap';

export function populateDungeons(map) {
  let mapNotFull = true;
  let dungeons = [];

  while (mapNotFull) {
    const {mapFull, position, dungeon} = addDungeonToMap(map);
    if (!mapFull) dungeons.push({dungeon, position, id: any.string()});
    mapNotFull = !mapFull;
  }

  return dungeons;
}
