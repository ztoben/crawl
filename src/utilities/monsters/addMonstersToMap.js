import {ATTACK_BOOST, CHEST, DEFENSE_BOOST, END_GAME, MONSTER, PORTAL, POTION} from './constants';
import {selectEmptyRandomCoordinate} from '../helpers/selectEmptyRandomCoordinate';
import {getRandomMonster} from './getRandomMonster';

export function addMonstersToMap(map) {
  const monsters = Array(10).fill(getRandomMonster());

  monsters.forEach(content => {
    const [x, y] = selectEmptyRandomCoordinate(map);

    map[x][y].type = MONSTER;
    map[x][y].data = content;
  });
}
