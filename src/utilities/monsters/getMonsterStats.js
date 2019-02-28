import {ranges} from './monsterInitialStatRanges';
import {getStats} from '../helpers/getStats';

export function getMonsterStats(monster) {
  const stats = getStats(ranges, monster);
  const experience = getMonsterExperience(stats);

  return {...stats, experience};
}

function getMonsterExperience(stats) {
  let experience = 0;
  for (let stat in stats) {
    experience = experience + stats[stat];
  }
  return Math.floor(experience / 4);
}
