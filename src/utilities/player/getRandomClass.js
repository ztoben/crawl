import {allClasses} from './classes';
import any from '@travi/any';

export function getRandomClass() {
  return any.fromList(allClasses);
}
