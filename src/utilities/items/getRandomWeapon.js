import any from '@travi/any';
import {weapons} from './weapons';

export function getRandomWeapon() {
  return any.fromList(weapons);
}
