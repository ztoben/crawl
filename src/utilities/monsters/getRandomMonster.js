import any from '@travi/any';
import {ranges} from './monsterInitialStatRanges';
import {getMonsterStats} from './getMonsterStats';
import {allMonsters} from './constants';

export function getRandomMonster() {
  const monsterType = any.fromList(allMonsters);
  const stats = getMonsterStats(monsterType, ranges);

  return {type: monsterType, ...stats};
}
