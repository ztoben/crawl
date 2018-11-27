import {js as EasyStar} from 'easystarjs';
import {updateTile} from '../tiles/updateTile';
import {FLOOR} from '../tiles/constants';

export async function connectDungeons(map, dungeons) {
  const newMap = JSON.parse(JSON.stringify(map));
  const matrix = newMap.map(row => {
    return row.map(() => 0);
  });

  const easystar = new EasyStar();
  easystar.setGrid(matrix);
  easystar.setAcceptableTiles(0);

  const pathsPromise = dungeons.map(({dungeon, position}, index) => {
    if (index < dungeons.length - 1) {
      const nextDungeon = dungeons[index + 1];
      const {boundingPoint: boundingPointCurr} = dungeon;
      const {boundingPoint: boundingPointNext} = nextDungeon.dungeon;
      const [currX, currY] = position;
      const [nextX, nextY] = nextDungeon.position;
      const [currBoundingX, currBoundingY] = boundingPointCurr;
      const [nextBoundingX, nextBoundingY] = boundingPointNext;

      return new Promise(resolve => {
        easystar.findPath(
          currX + currBoundingX,
          currY + currBoundingY,
          nextX + nextBoundingX,
          nextY + nextBoundingY,
          path => resolve(path)
        );
      });
    }
  });

  await easystar.calculate();

  await Promise.all(pathsPromise).then(paths => {
    paths.forEach(path => {
      if (path)
        path.forEach(({x, y}) => {
          newMap[x][y] = updateTile(newMap, FLOOR, [x, y], 0);
        });
    });
  });

  return newMap;
}
