import any from '@travi/any';
import {addDungeonToMap} from './addDungeonToMap';

export function populateDungeons(map) {
  let mapNotFull = true;
  let dungeons = [];

  while (mapNotFull) {
    const {mapFull, position, dungeon} = addDungeonToMap(map);
    dungeons.push({dungeon, position, id: any.string()});
    mapNotFull = !mapFull;
  }

  return dungeons;
}
