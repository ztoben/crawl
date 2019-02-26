import {ATTACK_BOOST, DEFENSE_BOOST, END_GAME, PORTAL, POTION} from './constants';
import {selectEmptyRandomCoordinate} from '../helpers/selectEmptyRandomCoordinate';
import {FLOOR} from '../tiles/constants';
import {getNewPosition, isArrayEqual, updateMaps} from '..';
import {KEY} from '../items/constants';
import {clearTile} from '../tiles/clearTile';

export function openChest({store, logEvent, type, position}) {
  const map = store.get('map');

  switch (type) {
    case POTION:
      logEvent('You found a potion. HP +20.');
      store.set('hp')(store.get('hp') + 20);

      clearTile(position, map);

      return position;
    case PORTAL:
      logEvent('You step into a portal and are warped to a new place on the map.');
      const miniMapPng = store.get('miniMapPng');
      const selectedPosition = selectEmptyRandomCoordinate(map);

      clearTile(position, map);

      store.set('selectedPosition')(selectedPosition);
      store.set('map')(updateMaps(map, miniMapPng, selectedPosition, position));

      return selectedPosition;
    case END_GAME:
      const key = store.get('items').find(item => item.name === KEY);

      if (!key) {
        logEvent('You must have a key to unlock this chest. Try killing an enemy.');

        return undefined;
      }

      clearTile(position, map);

      logEvent('You unlocked the portal home, congratulations on surviving!');
      store.set('gameState')('win');
      return position;
    case ATTACK_BOOST:
      logEvent('You found an attack booster. ATK +5.');
      store.set('atk')(store.get('atk') + 5);

      clearTile(position, map);

      return position;
    case DEFENSE_BOOST:
      logEvent('You found a defensive booster. DEF +5.');
      store.set('def')(store.get('def') + 5);

      clearTile(position, map);

      return position;
  }
}
