import {ATTACK_BOOST, CHEST, DEFENSE_BOOST, END_GAME, PORTAL, POTION} from './constants';
import {selectEmptyRandomCoordinate} from '../helpers/selectEmptyRandomCoordinate';

export function addChestsToMap(map) {
  const portals = Array(5).fill(PORTAL);
  const chests = [...portals, POTION, END_GAME, ATTACK_BOOST, DEFENSE_BOOST];

  chests.forEach(content => {
    const [x, y] = selectEmptyRandomCoordinate(map);

    map[x][y].type = CHEST;
    map[x][y].data = {type: content};
  });
}
