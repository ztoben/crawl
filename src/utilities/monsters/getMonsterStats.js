import {ranges} from './monsterInitialStatRanges';
import {getStats} from '../helpers/getStats';

export function getMonsterStats(monster) {
  return getStats(ranges, monster);
}
