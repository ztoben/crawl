import any from '@travi/any';
import {MAX_NUMBER_DUNGEONS, MIN_NUMBER_DUNGEONS} from '../map/constants';
import {addDungeonToMap} from './addDungeonToMap';

export function populateDungeons(map) {
  for (
    let dungeons = 0;
    dungeons <
    any.integer({
      min: MIN_NUMBER_DUNGEONS,
      max: MAX_NUMBER_DUNGEONS,
    });
    dungeons++
  ) {
    addDungeonToMap(map);
  }
}
