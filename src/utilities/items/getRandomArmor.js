import any from '@travi/any';
import {armors} from './armors';

export function getRandomArmor() {
  return any.fromList(armors);
}
