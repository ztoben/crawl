import {FLOOR} from '../tiles/constants';
import any from '@travi/any';

export function selectEmptyRandomCoordinate(map) {
  const voidTiles = map
    .map(row => {
      return row.filter(tile => tile.type === FLOOR);
    })
    .flat();

  return any.fromList(voidTiles).index;
}
