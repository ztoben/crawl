import {MAGE, ROGUE, THIEF, WARRIOR} from './classes';
import any from '@travi/any';

export function getRandomClass() {
  return any.fromList([WARRIOR, THIEF, ROGUE, MAGE]);
}
