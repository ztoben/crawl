import {js as EasyStar} from 'easystarjs';
import {setTileType} from '../tiles/setTileType';
import {FLOOR} from '../tiles/constants';

export function connectDungeons(map, dungeons) {
  const matrix = map.map(row => {
    return row.map(() => 0);
  });

  const easystar = new EasyStar();
  easystar.setGrid(matrix);
  easystar.setAcceptableTiles([0]);

  dungeons.forEach(({dungeon, position}, index) => {
    if (index < dungeons.length - 1) {
      const nextDungeon = dungeons[index + 1];
      const {boundingPoint: boundingPointCurr} = dungeon;
      const {boundingPoint: boundingPointNext} = nextDungeon.dungeon;
      const [currX, currY] = position;
      const [nextX, nextY] = nextDungeon.position;
      const [currBoundingX, currBoundingY] = boundingPointCurr;
      const [nextBoundingX, nextBoundingY] = boundingPointNext;

      easystar.findPath(
        currX + currBoundingX,
        currY + currBoundingY,
        nextX + nextBoundingX,
        nextY + nextBoundingY,
        path => {
          if (path) {
            path.forEach(({x, y}) => {
              setTileType(map, FLOOR, [x, y], 0);
            });
          }
        }
      );
      easystar.calculate();
    }
  });

  return map;
}
