import any from '@travi/any';
import {selectEmptyRandomCoordinate} from '../helpers/selectEmptyRandomCoordinate';
import {getRandomMonster} from './getRandomMonster';
import {MONSTER} from './constants';
import {KEY} from '../items/constants';

export function addMonstersToMap(map) {
  const numberOfMonsters = any.integer({min: 10, max: 20});
  const keyBearerIndex = any.integer({min: 1, max: 10});

  for (let i = 0; i < numberOfMonsters; i++) {
    const [x, y] = selectEmptyRandomCoordinate(map);

    map[x][y].type = MONSTER;
    map[x][y].data = getRandomMonster();

    if (i === keyBearerIndex) {
      map[x][y].data.drops = [{name: KEY, effect: '', stat: ''}];
    }
  }
}
