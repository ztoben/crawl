import {ATTACK_BOOST, DEFENSE_BOOST, END_GAME, PORTAL, POTION} from './constants';
import {selectEmptyRandomCoordinate} from '../helpers/selectEmptyRandomCoordinate';
import {FLOOR} from '../tiles/constants';
import {getNewPosition, isArrayEqual, updateMaps} from '..';

export function openChest({store, logEvent, type, position}) {
  const map = store.get('map');
  const [x, y] = position;

  map[x][y].type = FLOOR;
  map[x][y].data = undefined;

  switch (type) {
    case POTION:
      logEvent('You found a potion. HP +20.');
      store.set('hp')(store.get('hp') + 20);
      return position;
    case PORTAL:
      logEvent('You step into a portal and are warped to a new place on the map.');
      const map = store.get('map');
      const miniMapPng = store.get('miniMapPng');
      const selectedPosition = selectEmptyRandomCoordinate(map);

      store.set('selectedPosition')(selectedPosition);
      store.set('map')(updateMaps(map, miniMapPng, selectedPosition));

      return selectedPosition;
    case END_GAME:
      logEvent('You found the portal home, congratulations on surviving!');
      store.set('gameState')('win');
      return position;
    case ATTACK_BOOST:
      logEvent('You found an attack booster. ATK +5.');
      store.set('atk')(store.get('atk') + 5);
      return position;
    case DEFENSE_BOOST:
      logEvent('You found a defensive booster. DEF +5.');
      store.set('def')(store.get('def') + 5);
      return position;
  }
}
