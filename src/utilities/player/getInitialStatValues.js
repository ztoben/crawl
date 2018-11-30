import {ranges} from './initialStatRanges';
import any from '@travi/any';

export function getInitialStats(classType) {
  let stats = {
    hp: 0,
    mp: 0,
    atk: 0,
    def: 0,
    satk: 0,
    sdef: 0,
  };

  for (let stat in stats) {
    stats[stat] = getStats(classType, stat);
  }

  return stats;
}

function getStats(classType, stat) {
  return any.integer({min: ranges[classType][stat].min, max: ranges[classType][stat].max});
}
