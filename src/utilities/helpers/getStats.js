import any from '@travi/any';

function parseStats(ranges, type, stat) {
  const min = ranges[type][stat].min;
  const max = ranges[type][stat].max;

  return any.integer({min, max});
}

export function getStats(ranges, type) {
  let statTypes = ['hp', 'mp', 'atk', 'def', 'satk', 'sdef'];

  return statTypes.reduce((acc, stat) => {
    return {
      ...acc,
      ...{
        [stat]: parseStats(ranges, type, stat),
      },
    };
  }, {});
}
