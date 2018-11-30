import {ranges} from './initialStatRanges';
import any from '@travi/any';

function parseStats(classType, stat) {
  const min = ranges[classType][stat].min;
  const max = ranges[classType][stat].max;

  return any.integer({min, max});
}

export function getInitialStats(classType) {
  let statTypes = ['hp', 'mp', 'atk', 'def', 'satk', 'sdef'];

  return statTypes.reduce((acc, stat) => {
    return {
      ...acc,
      ...{
        [stat]: parseStats(classType, stat),
      },
    };
  }, {});
}
