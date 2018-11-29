import {DRUID, CLERIC, ROGUE, THIEF, PALADIN} from './classes';
import any from '@travi/any';

export function getRandomClass() {
  return any.fromList([DRUID, THIEF, ROGUE, CLERIC, PALADIN]);
}
