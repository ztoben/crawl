import {ranges} from './monsterInitialStatRanges';
import any from '@travi/any';
import {getMonsterStats} from './getMonsterStats';

export function getRandomMonster() {
  let monster = Object.keys(ranges)[any.integer({min: 0, max: Object.keys(ranges).length - 1})];
  let stats = getMonsterStats(monster);

  return {monster, ...stats};
}
